import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import NoticeContent from "../components/Notice/NoticeContent";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Notice() {
  const { detail } = useParams();
  const [tool, setTool] = useState(0);

  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg3.jpg"
        text="NOTICE"
        arr={[{ name: "공지사항" }]}
        tool={tool}
        setTool={setTool}
      />
      {tool === 0 && <NoticeContent />}
      <Footer />
    </div>
  );
}

export default Notice;
