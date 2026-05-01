import "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactSupport from "../components/ContactSupport";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
        <Gallery />
      <Testimonials />
      <ContactSupport />
      <Footer />
     
    </>
  );
}

export default Home;