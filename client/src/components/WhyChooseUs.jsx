import "react";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose SafeNest?</h2>

      <div className="why-grid">

        <div className="why-card">
          <h3>✔ Certified Experts</h3>
          <p>Highly trained professionals with years of experience.</p>
        </div>

        <div className="why-card">
          <h3>⚡ Fast Service</h3>
          <p>Quick inspection and immediate reporting system.</p>
        </div>

        <div className="why-card">
          <h3>💰 Affordable Pricing</h3>
          <p>Best pricing with high-quality inspection service.</p>
        </div>

        <div className="why-card">
          <h3>🔒 Trusted Service</h3>
          <p>100% customer satisfaction and reliable service.</p>
        </div>

      </div>

      <div className="stats">

        <div>
          <h1>500+</h1>
          <p>Homes Inspected</p>
        </div>

        <div>
          <h1>300+</h1>
          <p>Happy Clients</p>
        </div>

        <div>
          <h1>5+ Years</h1>
          <p>Experience</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;