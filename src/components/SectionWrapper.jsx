/* ==============================
   SectionWrapper – Consistent section layout
   ============================== */

function SectionWrapper({ children, className = '', bg = '', id = '' }) {
    return (
        <section id={id} className={`section-padding ${bg} ${className}`}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}

export default SectionWrapper;
