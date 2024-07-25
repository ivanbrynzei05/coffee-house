import AboutUs from "../../components/about-us/about-us";
import Hero from "../../components/hero/hero";
import OurBest from "../../components/our-best/our-best";

function Home(props) {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurBest
        data={props.data} />
    </>
  );
}

export default Home;