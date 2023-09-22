import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import GellaryContent from "../components/Gellary/GellaryContent";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Gellary() {
  const { detail } = useParams();
  const [tool, setTool] = useState(0);

  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg4.jpg"
        text="GELLARY"
        arr={[
          {
            name: "갤러리",
          },
        ]}
        tool={tool}
        setTool={setTool}
      />
      {tool === 0 && <GellaryContent />}
      <Footer />
    </div>
  );
}

export default Gellary;
