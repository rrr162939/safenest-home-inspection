import "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <h1>About SafeNest</h1>

        <p>
          SafeNest Home Inspection Services helps homeowners protect
          their property from hidden damages, safety risks, leakage,
          electrical problems, and structural issues.
        </p>

        <p>
          Our certified experts provide professional inspection
          services with modern tools, trusted reports, and fast
          customer support.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;