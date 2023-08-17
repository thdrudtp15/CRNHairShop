import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import "../css/Main.css";
import { useEffect } from "react";
import ImageSlide from "../components/MainPage/ImageSlide";
import Notice from "../components/MainPage/Notice";
import Toolbar from "../components/MainPage/Toolbar";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <ImageSlide />
      <div className="Main-Image-comment"></div>
      <Toolbar />
      <div className="Main-social">
        <div className="d"></div>
      </div>
      <div
        style={{ height: 600, width: "100%", background: "transparent" }}
      ></div>
      <Notice />
      <Footer />
    </div>
  );
};

export default Main;
