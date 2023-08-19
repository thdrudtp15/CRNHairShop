import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import { useParams } from "react-router-dom";

function Gellary() {
  const { detail } = useParams();

  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg4.jpg"
        text="GELLARY"
        arr={[
          {
            name: "갤러리",
            path: "gellary/gellary",
            id: "gellary",
          },
        ]}
        param={detail}
      />
      <Footer />
    </div>
  );
}

export default Gellary;
