import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import "../css/Main.css";
import { useEffect } from "react";
import ImageSlide from "../components/MainPage/ImageSlide";
import Notice from "../components/MainPage/Notice";
import Toolbar from "../components/MainPage/Toolbar";

const Main = () => {
  // function 문자생성기(문자) {
  //   let arr = [...문자];
  //   let count = 0;
  //   let intervalId = setInterval(function () {
  //     document.querySelector(
  //       ".Main-Image-comment"
  //     ).innerHTML += `<span className="cursor">${arr[count]}</span>`;
  //     count++;
  //     if (count === arr.length) {
  //       document.querySelector(".Navbar-wrap").classList.add("sighted");
  //       //document.querySelector(".scrollPleaseBox").classList.add("sighted");
  //       clearInterval(intervalId);
  //     }
  //   }, 80);
  // }
  // 문자생성기("     ");
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
