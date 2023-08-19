import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Banner from "../components/Common/Banner";
import NoticeContent from "../components/Notice/NoticeContent";
import { useParams } from "react-router-dom";

function Notice() {
  const { detail } = useParams();

  return (
    <div>
      <Navbar />
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg3.jpg"
        text="NOTICE"
        arr={[{ name: "공지사항", path: "notice/notice", id: "notice" }]}
        param={detail}
      />
      {detail === "notice" && <NoticeContent />}
      <Footer />
    </div>
  );
}

export default Notice;
