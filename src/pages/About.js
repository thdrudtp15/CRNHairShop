import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import ShopLocation from "../components/About/ShopLoaction/ShopLocation";
import { useParams } from "react-router-dom";

function About() {
  const { detail } = useParams();
  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg1.png"
        text="ABOUT"
        arr={[
          { name: "소개", path: "about/about", id: "about" },
          { name: "위치", path: "about/location", id: "location" },
        ]}
        param={detail}
      />
      {detail === "about" && <div>원장님 소개</div>}
      {detail === "location" && <ShopLocation />}
      <Footer />
    </div>
  );
}

export default About;
