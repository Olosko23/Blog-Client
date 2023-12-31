import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import BackToTop from "../../components/BackToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <BackToTop />
      <Section1 />
      <Section2 />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
