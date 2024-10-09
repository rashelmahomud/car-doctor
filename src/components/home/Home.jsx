import About from "./About";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import OpenTime from "./OpenTime";
import OurTeam from "./OurTeam";
import PopularProduct from "./PopularProduct";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <OpenTime />
      <PopularProduct />
      <OurTeam />
      <ChooseUs />
    </div>
  );
}
