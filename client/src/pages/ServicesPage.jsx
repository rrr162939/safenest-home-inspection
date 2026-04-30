import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <h1>Our Services</h1>

        <div className="service-cards">

          <div className="card">
            <h3>Roof Inspection</h3>
            <p>Roof damage, cracks and leakage detection.</p>
          </div>

          <div className="card">
            <h3>Plumbing Inspection</h3>
            <p>Pipe leakage and plumbing safety check.</p>
          </div>

          <div className="card">
            <h3>Electrical Inspection</h3>
            <p>Wiring, power safety and electrical issues.</p>
          </div>

          <div className="card">
            <h3>Pest Inspection</h3>
            <p>Termite and structural pest damage checking.</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;