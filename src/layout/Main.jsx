import { Outlet } from "react-router-dom";
import Footer from "../pages/sharet/Footer/Footer";
import Navbar from "../pages/sharet/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
