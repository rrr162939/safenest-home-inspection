import "react";

const services = [
  {
    title: "Roof Inspection",
    desc: "Detect roof cracks, damage and leakage issues early.",
    icon: "🏠",
  },
  {
    title: "Electrical Inspection",
    desc: "Ensure safe wiring and prevent electrical hazards.",
    icon: "⚡",
  },
  {
    title: "Plumbing Inspection",
    desc: "Check water leakage and pipe damage thoroughly.",
    icon: "🚿",
  },
  {
    title: "Pest Inspection",
    desc: "Identify termite and pest damage in structure.",
    icon: "🐛",
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Inspection Services</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;