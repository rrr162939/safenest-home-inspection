import "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Protect Your Home Before Problems Grow</h1>

        <p>
          Professional Home Inspection Services for Roof, Plumbing,
          Electrical, Leakage, Pest Damage and Property Safety.
        </p>

        <button onClick={() => navigate("/booking")}>
          Book Inspection
        </button>
      </div>
    </section>
  );
}

export default Hero;