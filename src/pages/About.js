import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import ShopLocation from "../components/About/ShopLoaction/ShopLocation";
import { useParams } from "react-router-dom";
import { useState } from "react";

function About() {
  const { detail } = useParams();
  const [tool, setTool] = useState(0);
  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg1.png"
        text="ABOUT"
        arr={[{ name: "소개" }, { name: "위치" }]}
        tool={tool}
        setTool={setTool}
      />
      {tool === 0 && <div>원장님 소개</div>}
      {tool === 1 && <ShopLocation />}
      <Footer />
    </div>
  );
}

export default About;
