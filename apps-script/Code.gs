/* ============================================================
   VISILEN Technologies — Google Apps Script
   Internship Workflow Automation
   
   FEATURES:
   1. Auto-generates Application ID on form submit
   2. Sends confirmation email to student
   3. Generates Certificate ID when admin marks "Completed"
   4. Creates certificate PDF from Google Docs template
   5. Emails certificate to student
   6. Web API for certificate verification (website integration)
   
   SETUP: See setup-instructions.md for deployment steps
   ============================================================ */

// ═══════════════════════════════════════════
// CONFIGURATION — UPDATE THESE VALUES
// ═══════════════════════════════════════════

const CONFIG = {
  // Google Sheet tab name where form responses go
  SHEET_NAME: 'Form Responses 1',
  
  // Google Docs certificate template ID
  // Create a template doc and paste its ID here
  // The template should have placeholders: {{NAME}}, {{DOMAIN}}, {{DURATION}}, {{CERT_ID}}, {{DATE}}
  CERTIFICATE_TEMPLATE_ID: 'YOUR_GOOGLE_DOC_TEMPLATE_ID',
  
  // Folder ID where generated certificate PDFs will be saved
  CERTIFICATE_FOLDER_ID: 'YOUR_GOOGLE_DRIVE_FOLDER_ID',
  
  // Company info for emails
  COMPANY_NAME: 'VISILEN Technologies',
  COMPANY_EMAIL: 'contact@visilen.tech',
  WEBSITE_URL: 'https://visilen.tech',
  
  // Column positions in Google Sheet (1-indexed)
  // Adjust these based on your form field order
  COLUMNS: {
    TIMESTAMP: 1,
    FULL_NAME: 2,
    EMAIL: 3,
    PHONE: 4,
    DOMAIN: 5,
    DURATION: 6,
    NOTES: 7,
    PAYMENT_SCREENSHOT: 8,  // Last field — Google Forms file upload gives a Drive link
    // These columns are added by the script (add them manually to the sheet header)
    APPLICATION_ID: 9,
    PAYMENT_STATUS: 10,   // Pending / Verified / Rejected
    PROJECT_STATUS: 11,   // Not Started / In Progress / Completed
    CERTIFICATE_ID: 12,
    CERTIFICATE_SENT: 13, // Yes / No
  }
};


// ═══════════════════════════════════════════
// CUSTOM MENU — Adds buttons to Google Sheets
// ═══════════════════════════════════════════

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🎓 VISILEN Admin')
    .addItem('✅ Generate Certificates (Completed Students)', 'generateCertificates')
    .addItem('📧 Send Reminder to Unverified', 'sendPaymentReminders')
    .addItem('📊 Dashboard Summary', 'showDashboard')
    .addSeparator()
    .addItem('⚙️ Setup Sheet Headers', 'setupHeaders')
    .addToUi();
}


// ═══════════════════════════════════════════
// SETUP — Run once to add extra columns
// ═══════════════════════════════════════════

function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Sheet "' + CONFIG.SHEET_NAME + '" not found. Check CONFIG.SHEET_NAME.');
    return;
  }
  
  const col = CONFIG.COLUMNS;
  sheet.getRange(1, col.APPLICATION_ID).setValue('Application ID');
  sheet.getRange(1, col.PAYMENT_STATUS).setValue('Payment Status');
  sheet.getRange(1, col.PROJECT_STATUS).setValue('Project Status');
  sheet.getRange(1, col.CERTIFICATE_ID).setValue('Certificate ID');
  sheet.getRange(1, col.CERTIFICATE_SENT).setValue('Certificate Sent');
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, col.CERTIFICATE_SENT);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#0A1A2F');
  headerRange.setFontColor('#00E5FF');
  
  SpreadsheetApp.getUi().alert('✅ Headers added! You can now start receiving form submissions.');
}


// ═══════════════════════════════════════════
// FORM SUBMIT TRIGGER — Auto-runs on new submission
// ═══════════════════════════════════════════

function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const col = CONFIG.COLUMNS;
  
  // Generate Application ID: VIS-APP-0001
  const appId = 'VIS-APP-' + String(lastRow - 1).padStart(4, '0');
  
  // Write Application ID and default statuses
  sheet.getRange(lastRow, col.APPLICATION_ID).setValue(appId);
  sheet.getRange(lastRow, col.PAYMENT_STATUS).setValue('Pending');
  sheet.getRange(lastRow, col.PROJECT_STATUS).setValue('Not Started');
  sheet.getRange(lastRow, col.CERTIFICATE_ID).setValue('');
  sheet.getRange(lastRow, col.CERTIFICATE_SENT).setValue('No');
  
  // Get student details
  const name = sheet.getRange(lastRow, col.FULL_NAME).getValue();
  const email = sheet.getRange(lastRow, col.EMAIL).getValue();
  const domain = sheet.getRange(lastRow, col.DOMAIN).getValue();
  const duration = sheet.getRange(lastRow, col.DURATION).getValue();
  const txnScreenshot = sheet.getRange(lastRow, col.PAYMENT_SCREENSHOT).getValue();
  
  // Send confirmation email
  sendConfirmationEmail(name, email, domain, duration, txnScreenshot, appId);
}


// ═══════════════════════════════════════════
// CONFIRMATION EMAIL — Sent after form submission
// ═══════════════════════════════════════════

function sendConfirmationEmail(name, email, domain, duration, screenshot, appId) {
  const subject = `✅ Application Received — ${CONFIG.COMPANY_NAME}`;
  
  const htmlBody = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A1A2F; color: #F1F5F9; border-radius: 12px; overflow: hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #00E5FF, #2563EB); padding: 32px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; color: #0A1A2F; font-weight: 700;">VISILEN Technologies</h1>
        <p style="margin: 8px 0 0; color: #0A1A2F; font-size: 14px;">Where Vision Meets Innovation</p>
      </div>
      
      <!-- Body -->
      <div style="padding: 32px;">
        <h2 style="color: #00E5FF; font-size: 20px; margin-bottom: 16px;">Hi ${name} 👋</h2>
        
        <p style="color: #F1F5F9; line-height: 1.6;">
          Thank you for applying to the <strong>${CONFIG.COMPANY_NAME}</strong> Internship Program! 
          We've received your application and will verify your payment shortly.
        </p>
        
        <!-- Details Card -->
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #00E5FF; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Application Details</h3>
          <table style="width: 100%; color: #F1F5F9; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #94A3B8;">Application ID</td><td style="padding: 8px 0; font-weight: 600;">${appId}</td></tr>
            <tr><td style="padding: 8px 0; color: #94A3B8;">Domain</td><td style="padding: 8px 0; font-weight: 600;">${domain}</td></tr>
            <tr><td style="padding: 8px 0; color: #94A3B8;">Duration</td><td style="padding: 8px 0; font-weight: 600;">${duration}</td></tr>
            <tr><td style="padding: 8px 0; color: #94A3B8;">Payment Proof</td><td style="padding: 8px 0; font-weight: 600;">Screenshot uploaded ✓</td></tr>
          </table>
        </div>
        
        <!-- Next Steps -->
        <h3 style="color: #F1F5F9; font-size: 16px;">What Happens Next?</h3>
        <ol style="color: #94A3B8; line-height: 2; padding-left: 20px;">
          <li>Our team will <strong style="color: #F1F5F9;">verify your payment</strong> within 24–48 hours.</li>
          <li>You'll receive your <strong style="color: #F1F5F9;">project details & GitHub instructions</strong> via email.</li>
          <li>Start working on your project and submit via GitHub.</li>
          <li>Upon completion, receive your <strong style="color: #00E5FF;">certificate</strong>!</li>
        </ol>
        
        <p style="color: #94A3B8; font-size: 13px; margin-top: 24px;">
          If you have any questions, reply to this email or reach us at 
          <a href="mailto:${CONFIG.COMPANY_EMAIL}" style="color: #00E5FF;">${CONFIG.COMPANY_EMAIL}</a>
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background: rgba(255,255,255,0.03); padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
        <p style="color: #64748B; font-size: 12px; margin: 0;">
          © ${new Date().getFullYear()} ${CONFIG.COMPANY_NAME} | <a href="${CONFIG.WEBSITE_URL}" style="color: #00E5FF;">${CONFIG.WEBSITE_URL}</a>
        </p>
      </div>
    </div>
  `;
  
  try {
    GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
    Logger.log('Confirmation email sent to: ' + email);
  } catch (error) {
    Logger.log('Error sending email to ' + email + ': ' + error.message);
  }
}


// ═══════════════════════════════════════════
// CERTIFICATE GENERATION — Admin triggers this
// ═══════════════════════════════════════════

function generateCertificates() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const col = CONFIG.COLUMNS;
  let count = 0;
  
  // Skip header row
  for (let i = 1; i < data.length; i++) {
    const row = i + 1; // Sheet rows are 1-indexed
    const paymentStatus = data[i][col.PAYMENT_STATUS - 1];
    const projectStatus = data[i][col.PROJECT_STATUS - 1];
    const certId = data[i][col.CERTIFICATE_ID - 1];
    const certSent = data[i][col.CERTIFICATE_SENT - 1];
    
    // Only process: Payment Verified + Project Completed + No Certificate yet
    if (paymentStatus === 'Verified' && projectStatus === 'Completed' && !certId) {
      const name = data[i][col.FULL_NAME - 1];
      const email = data[i][col.EMAIL - 1];
      const domain = data[i][col.DOMAIN - 1];
      const duration = data[i][col.DURATION - 1];
      
      // Generate Certificate ID: VIS-2025-0001
      const year = new Date().getFullYear();
      const certNumber = 'VIS-' + year + '-' + String(row - 1).padStart(4, '0');
      const issueDate = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMMM yyyy');
      
      // Create certificate PDF
      try {
        const pdfUrl = createCertificatePDF(name, domain, duration, certNumber, issueDate);
        
        // Update sheet
        sheet.getRange(row, col.CERTIFICATE_ID).setValue(certNumber);
        sheet.getRange(row, col.CERTIFICATE_SENT).setValue('Yes');
        
        // Send certificate email
        sendCertificateEmail(name, email, domain, certNumber, issueDate, pdfUrl);
        count++;
        
      } catch (error) {
        Logger.log('Error generating cert for ' + name + ': ' + error.message);
        // Still save the cert ID even if PDF fails
        sheet.getRange(row, col.CERTIFICATE_ID).setValue(certNumber);
        sheet.getRange(row, col.CERTIFICATE_SENT).setValue('Error - ' + error.message);
      }
    }
  }
  
  SpreadsheetApp.getUi().alert(
    count > 0
      ? '✅ Generated and sent ' + count + ' certificate(s)!'
      : 'ℹ️ No students found with Verified payment + Completed project status without a certificate.'
  );
}


// ═══════════════════════════════════════════
// CREATE CERTIFICATE PDF — From Google Docs template
// ═══════════════════════════════════════════

function createCertificatePDF(name, domain, duration, certId, issueDate) {
  // Copy the template
  const templateFile = DriveApp.getFileById(CONFIG.CERTIFICATE_TEMPLATE_ID);
  const folder = DriveApp.getFolderById(CONFIG.CERTIFICATE_FOLDER_ID);
  const copyFile = templateFile.makeCopy('Certificate - ' + name, folder);
  const doc = DocumentApp.openById(copyFile.getId());
  const body = doc.getBody();
  
  // Replace placeholders
  body.replaceText('{{NAME}}', name);
  body.replaceText('{{DOMAIN}}', domain);
  body.replaceText('{{DURATION}}', duration);
  body.replaceText('{{CERT_ID}}', certId);
  body.replaceText('{{DATE}}', issueDate);
  
  doc.saveAndClose();
  
  // Convert to PDF
  const pdfBlob = DriveApp.getFileById(copyFile.getId()).getAs('application/pdf');
  const pdfFile = folder.createFile(pdfBlob).setName('Certificate - ' + name + '.pdf');
  
  // Delete the Google Doc copy (keep only PDF)
  DriveApp.getFileById(copyFile.getId()).setTrashed(true);
  
  return pdfFile.getUrl();
}


// ═══════════════════════════════════════════
// CERTIFICATE EMAIL — Sent with PDF attachment
// ═══════════════════════════════════════════

function sendCertificateEmail(name, email, domain, certId, issueDate, pdfUrl) {
  const subject = `🎓 Your Certificate is Ready — ${CONFIG.COMPANY_NAME}`;
  
  const htmlBody = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A1A2F; color: #F1F5F9; border-radius: 12px; overflow: hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #00E5FF, #2DD4BF); padding: 32px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; color: #0A1A2F; font-weight: 700;">🎓 Congratulations!</h1>
        <p style="margin: 8px 0 0; color: #0A1A2F; font-size: 14px;">You've earned your certificate</p>
      </div>
      
      <!-- Body -->
      <div style="padding: 32px;">
        <h2 style="color: #F1F5F9; font-size: 20px; margin-bottom: 16px;">Hi ${name} 🎉</h2>
        
        <p style="color: #F1F5F9; line-height: 1.6;">
          Congratulations on successfully completing the <strong style="color: #00E5FF;">${domain}</strong> 
          internship at ${CONFIG.COMPANY_NAME}! Your certificate is attached to this email.
        </p>
        
        <!-- Certificate Details -->
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin: 24px 0;">
          <table style="width: 100%; color: #F1F5F9; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #94A3B8;">Certificate ID</td><td style="padding: 8px 0; font-weight: 700; color: #00E5FF;">${certId}</td></tr>
            <tr><td style="padding: 8px 0; color: #94A3B8;">Program</td><td style="padding: 8px 0; font-weight: 600;">${domain}</td></tr>
            <tr><td style="padding: 8px 0; color: #94A3B8;">Issue Date</td><td style="padding: 8px 0; font-weight: 600;">${issueDate}</td></tr>
          </table>
        </div>
        
        <p style="color: #94A3B8; font-size: 14px;">
          🔗 <strong>Verify your certificate:</strong> 
          <a href="${CONFIG.WEBSITE_URL}/certificate" style="color: #00E5FF;">${CONFIG.WEBSITE_URL}/certificate</a>
        </p>
        
        <p style="color: #94A3B8; font-size: 13px;">
          Add this certificate to your LinkedIn profile to showcase your achievement!
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background: rgba(255,255,255,0.03); padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
        <p style="color: #64748B; font-size: 12px; margin: 0;">
          © ${new Date().getFullYear()} ${CONFIG.COMPANY_NAME} | <a href="${CONFIG.WEBSITE_URL}" style="color: #00E5FF;">${CONFIG.WEBSITE_URL}</a>
        </p>
      </div>
    </div>
  `;
  
  // Get PDF file and attach
  try {
    const pdfFileId = pdfUrl.match(/[-\w]{25,}/); // Extract file ID from URL
    if (pdfFileId) {
      const pdfBlob = DriveApp.getFileById(pdfFileId[0]).getBlob();
      GmailApp.sendEmail(email, subject, '', {
        htmlBody: htmlBody,
        attachments: [pdfBlob],
      });
    } else {
      GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
    }
    Logger.log('Certificate email sent to: ' + email);
  } catch (error) {
    Logger.log('Error sending cert email to ' + email + ': ' + error.message);
    // Try sending without attachment
    GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
  }
}


// ═══════════════════════════════════════════
// PAYMENT REMINDER — Email unverified students
// ═══════════════════════════════════════════

function sendPaymentReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const col = CONFIG.COLUMNS;
  let count = 0;
  
  for (let i = 1; i < data.length; i++) {
    const paymentStatus = data[i][col.PAYMENT_STATUS - 1];
    if (paymentStatus === 'Pending') {
      const name = data[i][col.FULL_NAME - 1];
      const email = data[i][col.EMAIL - 1];
      const appId = data[i][col.APPLICATION_ID - 1];
      
      const subject = `⏳ Payment Verification Pending — ${CONFIG.COMPANY_NAME}`;
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2>Hi ${name},</h2>
          <p>We noticed that your payment for application <strong>${appId}</strong> has not been verified yet.</p>
          <p>If you've already paid, please ensure your transaction ID is correct. If you haven't paid yet, please complete the payment and reply to this email with your transaction ID.</p>
          <p>Best regards,<br><strong>${CONFIG.COMPANY_NAME}</strong></p>
        </div>
      `;
      
      GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
      count++;
    }
  }
  
  SpreadsheetApp.getUi().alert('📧 Sent reminders to ' + count + ' student(s) with pending payments.');
}


// ═══════════════════════════════════════════
// DASHBOARD — Quick stats overview
// ═══════════════════════════════════════════

function showDashboard() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const col = CONFIG.COLUMNS;
  
  let stats = { total: 0, pending: 0, verified: 0, completed: 0, certified: 0 };
  
  for (let i = 1; i < data.length; i++) {
    stats.total++;
    const payment = data[i][col.PAYMENT_STATUS - 1];
    const project = data[i][col.PROJECT_STATUS - 1];
    const cert = data[i][col.CERTIFICATE_ID - 1];
    
    if (payment === 'Pending') stats.pending++;
    if (payment === 'Verified') stats.verified++;
    if (project === 'Completed') stats.completed++;
    if (cert) stats.certified++;
  }
  
  SpreadsheetApp.getUi().alert(
    '📊 VISILEN Dashboard\n\n' +
    '📋 Total Applications: ' + stats.total + '\n' +
    '⏳ Payment Pending: ' + stats.pending + '\n' +
    '✅ Payment Verified: ' + stats.verified + '\n' +
    '🏁 Project Completed: ' + stats.completed + '\n' +
    '🎓 Certificates Issued: ' + stats.certified
  );
}


// ═══════════════════════════════════════════
// WEB API — Certificate Verification Endpoint
// Deployed as Web App for website integration
// ═══════════════════════════════════════════

function doGet(e) {
  // Set CORS headers
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  const certId = e.parameter.id;
  
  if (!certId) {
    output.setContent(JSON.stringify({
      success: false,
      error: 'Missing certificate ID parameter. Use ?id=VIS-2025-0001'
    }));
    return output;
  }
  
  // Search for certificate in sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const col = CONFIG.COLUMNS;
  
  for (let i = 1; i < data.length; i++) {
    const storedCertId = String(data[i][col.CERTIFICATE_ID - 1]).trim();
    
    if (storedCertId.toUpperCase() === certId.toUpperCase()) {
      output.setContent(JSON.stringify({
        success: true,
        certificate: {
          id: storedCertId,
          name: data[i][col.FULL_NAME - 1],
          domain: data[i][col.DOMAIN - 1],
          duration: data[i][col.DURATION - 1],
          status: 'Valid',
          issuedBy: CONFIG.COMPANY_NAME,
        }
      }));
      return output;
    }
  }
  
  // Not found
  output.setContent(JSON.stringify({
    success: false,
    error: 'Certificate not found'
  }));
  return output;
}
