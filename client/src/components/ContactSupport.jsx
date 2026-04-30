import "react";
import { useNavigate } from "react-router-dom";

function ContactSupport() {
  const navigate = useNavigate();

  return (
    <section className="contact-support">
      <h2>Need Immediate Help?</h2>

      <p>We are available for quick support and inspection booking.</p>

      <div className="contact-buttons">

        {/* Go to Contact Page */}
        <button onClick={() => navigate("/contact")}>
          Get Full Support
        </button>

        {/* Call */}
        <button onClick={() => window.location.href = "tel:+919876543210"}>
          Call Now
        </button>

        {/* Email */}
        <button onClick={() => window.location.href = "mailto:support@safenest.com"}>
          Email Us
        </button>

        {/* WhatsApp */}
        <button onClick={() => window.open("https://wa.me/919876543210")}>
          WhatsApp
        </button>

      </div>
    </section>
  );
}

export default ContactSupport;