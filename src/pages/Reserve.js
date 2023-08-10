import Navbar from "../components/MainPage/Navbar";
import Banner from "../components/Common/Banner";
import ReserveContent from "../components/Reserve/Reservation/ReserveContent";
import Footer from "../components/MainPage/Footer";
import NoticeContent from "../components/Notice/NoticeContent";
import ShopLocation from "../components/About/ShopLoaction/ShopLocation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function About() {
  let { id, detail } = useParams();
  const [mode, setMode] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let obj = {
    reserve: (
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg5.jpg"
        text="RESERVE"
        arr={[
          {
            name: "실시간예약",
            path: "reserve/reservation",
            id: "reservation",
          },
          {
            name: "예약조회",
            path: "reserve/reservationcheck",
            id: "reservationcheck",
          },
        ]}
        param={detail}
      />
    ),
    notice: (
      <>
        <Banner
          img="http://riahn.co.kr/niabbs5/images_2022/subimg3.jpg"
          text="NOTICE"
          arr={[{ name: "공지사항", path: "notice/notice", id: "notice" }]}
          param={detail}
        />
      </>
    ),
    about: (
      <Banner
        img="http://riahn.co.kr/niabbs5/images_2022/subimg1.png"
        text="ABOUT"
        arr={[
          { name: "소개", path: "about/about", id: "about" },
          { name: "위치", path: "about/location", id: "location" },
        ]}
        param={detail}
      />
    ),
  };

  let obj2 = {
    reservation: <ReserveContent setMode={setMode} mode={mode} />,
    reservationcheck: <div>예약 조회</div>,
    notice: <NoticeContent />,
    about: <div>원장님소개</div>,
    location: <ShopLocation />,
  };

  return (
    <div className="About-wrap">
      <Navbar />
      <div style={{ height: 70 }}></div>
      {obj[id]}
      {obj2[detail]}

      <Footer />
    </div>
  );
}

export default About;
