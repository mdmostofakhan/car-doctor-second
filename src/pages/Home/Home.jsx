import About from "./About/About";
import Banner from "./Banner/Banner";
import Location from "./Location/Location";
import Products from "./Produts/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>

      <Location></Location>
      <Products></Products>
    </div>
  );
};

export default Home;
