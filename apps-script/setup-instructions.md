# VISILEN — Setup Instructions

Complete step-by-step guide to set up the internship workflow automation.

---

## Step 1: Create the Google Form

Go to [Google Forms](https://docs.google.com/forms/) and create a new form:

### Form Title
> **VISILEN Technologies — Internship Application**

### Form Description
> Welcome to the VISILEN Technologies Internship Program! 🚀
>
> **Before filling this form:**
> 1. Choose your internship plan below
> 2. Make payment via UPI to: **your-upi-id@paytm** (or scan the QR code below)
> 3. Take a **screenshot** of the payment confirmation
> 4. Fill this form and upload the screenshot
>
> **Pricing:**
> - First 100 students: FREE (skip payment, write "FREE" in notes)
> - Next 100 students: ₹100
> - Next 100 students: ₹200
> - After 300 students: ₹500
>
> **UPI ID:** `your-upi-id@paytm`
>
> ⚠️ Upload a clear screenshot of your payment confirmation. Blurry or invalid screenshots will delay your project assignment.

### Form Fields (in this exact order)

| # | Field Name | Type | Required |
|---|---|---|---|
| 1 | Full Name | Short text | ✅ Yes |
| 2 | Email ID | Short text (email validation) | ✅ Yes |
| 3 | Contact Number | Short text | ✅ Yes |
| 4 | Select Your Domain | Dropdown | ✅ Yes |
| 5 | Internship Duration | Multiple Choice | ✅ Yes |
| 6 | Any Questions or Notes? | Long text | ❌ No |

**Then, add a new section or a description block with:**
> 💳 **Payment Instructions**
>
> Pay via UPI using the QR code or UPI ID below.
> After payment, take a **clear screenshot** and upload it in the next field.
>
> **UPI ID:** `your-upi-id@paytm`
>
> *(Add your QR code image here — see instructions below)*

| # | Field Name | Type | Required |
|---|---|---|---|
| 7 | Payment Screenshot (upload) | **File upload** (images only) | ✅ Yes |

> **⚠️ Important:** The screenshot upload must be the **last field** in the form. Students fill their details first, then see the payment instructions + QR code, and finally upload the screenshot.
>
> **File upload settings:** Allow only images (JPG, PNG), max file size 10 MB, max 1 file.
> Respondents will need to be signed into Google to upload files.

### Dropdown options for "Select Your Domain":
- Web Development (React, Next.js, Node.js)
- Mobile App Development (React Native, Flutter)
- AI & Machine Learning (Python, TensorFlow)
- UI/UX Design (Figma, Design Systems)
- Software Engineering (Java, Python, System Design)

### Multiple Choice options for "Internship Duration":
- 1 Month
- 2 Months
- 3 Months

### Settings:
- Turn ON "Collect email addresses"
- Turn ON "Send responders a copy of their response"
- Turn ON "Allow response editing"

### Adding QR Code Image in the Form:
1. Generate a UPI QR code from your payment app (Google Pay, PhonePe, Paytm)
2. In the Google Form, click **Add image** (📷 icon) right above the screenshot upload field
3. Upload your QR code image
4. Add a caption: "Scan to pay via any UPI app"

---

## Step 2: Link Form to Google Sheets

1. In Google Forms, click the **"Responses"** tab
2. Click the **green Sheets icon** (📊) → "Create a new spreadsheet"
3. Name it: **"VISILEN Internship Applications"**
4. The sheet will auto-receive form submissions

---

## Step 3: Add Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in `Code.gs`
3. Copy ALL the code from `apps-script/Code.gs` in this project
4. Paste it into the Apps Script editor
5. **Update the CONFIG values** at the top:
   - `CERTIFICATE_TEMPLATE_ID` — (set up in Step 4)
   - `CERTIFICATE_FOLDER_ID` — (set up in Step 4)

6. Click **💾 Save**

---

## Step 4: Create Certificate Template

1. Create a new **Google Doc**
2. Design your certificate with these exact placeholders:

```
                    VISILEN Technologies
              Certificate of Completion

This is to certify that

                      {{NAME}}

has successfully completed the

              {{DOMAIN}} Internship

         Duration: {{DURATION}}
         Certificate ID: {{CERT_ID}}
         Date of Issue: {{DATE}}


                  VISILEN Technologies
             Where Vision Meets Innovation
```

3. Style it nicely (add borders, logo, colors)
4. Copy the **Document ID** from the URL:
   `https://docs.google.com/document/d/`**THIS_PART_IS_THE_ID**`/edit`
5. Paste it in `CONFIG.CERTIFICATE_TEMPLATE_ID` in Apps Script

### Create Certificate Folder:
1. In Google Drive, create a folder: **"VISILEN Certificates"**
2. Copy the **Folder ID** from the URL
3. Paste it in `CONFIG.CERTIFICATE_FOLDER_ID` in Apps Script

---

## Step 5: Set Up Form Submit Trigger

1. In Apps Script, click the **⏰ clock icon** (Triggers) in the left sidebar
2. Click **"+ Add Trigger"**
3. Configure:
   - **Function:** `onFormSubmit`
   - **Event source:** From spreadsheet
   - **Event type:** On form submit
4. Click **Save**
5. Grant permissions when prompted (click "Advanced" → "Go to VISILEN" → "Allow")

---

## Step 6: Run Initial Setup

1. In Apps Script, select `setupHeaders` from the function dropdown
2. Click **▶ Run**
3. Grant permissions if prompted
4. Check your Sheet — extra columns should appear (Application ID, Payment Status, etc.)

---

## Step 7: Deploy Web API (for Certificate Verification on Website)

1. In Apps Script, click **Deploy → New deployment**
2. Click the ⚙️ gear icon → Select **"Web app"**
3. Configure:
   - **Description:** Certificate Verification API
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Copy the **Web App URL** — it looks like:
   `https://script.google.com/macros/s/XXXXX/exec`
6. Save this URL — you'll need it for the website

---

## Step 8: Embed Form in Website

1. In Google Forms, click **"Send"** (paper plane icon)
2. Click the **< > embed icon**
3. Copy the iframe code
4. Paste it in `src/pages/Internship.jsx` and `src/pages/Contact.jsx` where the placeholder says

---

## Step 9: Add Web App URL to Website

1. Open `src/pages/Certificate.jsx`
2. Find `APPS_SCRIPT_URL` near the top
3. Replace with your Web App URL from Step 7

---

## Daily Admin Workflow

1. Open Google Sheet
2. Check new submissions
3. Click the **screenshot link** in the "Payment Screenshot" column to view the uploaded image
4. Verify the payment amount and details in the screenshot
5. Change **Payment Status** → `Verified` for valid payments
6. When student completes project, change **Project Status** → `Completed`
7. Click **🎓 VISILEN Admin → Generate Certificates** to auto-create and email certificates
8. Use **📊 Dashboard Summary** to see stats

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Emails not sending | Check Gmail sending limits (500/day for free) |
| Form not linked | Re-link from Forms → Responses → Sheets icon |
| Trigger not firing | Delete and recreate the trigger |
| Certificate PDF error | Check template ID and folder ID are correct |
| API returning error | Redeploy the web app after any code changes |
