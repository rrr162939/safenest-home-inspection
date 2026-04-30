import "react";

import img1 from "../assets/images/inspection1.jpg.png";
import img2 from "../assets/images/inspection2.jpg.png";
import img3 from "../assets/images/inspection3.jpg.png";
import img4 from "../assets/images/inspection4.jpg.png";
import img5 from "../assets/images/inspection5.jpg.png";
import img6 from "../assets/images/inspection6.jpg.png";
import img7 from "../assets/images/inspection7.jpg.png";
import img8 from "../assets/images/inspection8.jpg.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Inspection Work</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="inspection" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;