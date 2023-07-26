import Navbar from "../components/MainPage/Navbar";
import Banner from "../components/Common/Banner";
import ReserveContent from "../components/Reserve/ReserveContent";
import ReservationProgress from "../components/Reserve/ReservavtionProgress";
import Footer from "../components/MainPage/Footer";
import NoticeContent from "../components/Notice/NoticeContent";
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
        img=""
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
          img=""
          arr={[{ name: "공지사항", path: "notice/notice", id: "notice" }]}
          param={detail}
        />
      </>
    ),
    about: (
      <Banner
        img=""
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
    location: <div>위치는 광주 용두동에 있슴돠</div>,
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
