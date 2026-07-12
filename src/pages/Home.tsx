import Carousel from "../features/Home/Carousel";
import Hero from "../features/Home/Hero";
import Plans from "../features/Home/Plans";
import Footer from "../ui/Footer";

import NavBar from "../ui/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Plans />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
