import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <h1>Contact Us</h1>

        <p>Phone: +91 98765 43210</p>
        <p>Email: support@safenest.com</p>
        <p>Location: Hyderabad, India</p>
      </section>

      <Footer />
    </>
  );
}

export default Contact;