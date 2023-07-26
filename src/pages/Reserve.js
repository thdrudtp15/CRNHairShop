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
  let { id } = useParams();
  let { detail } = useParams();
  const [mode, setMode] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let obj = {
    reserve: (
      <>
        <Banner
          img=""
          arr={[
            { name: "예약하기", path: "reserve/reservation" },
            { name: "예약조회", path: "reserve/reservationcheck" },
          ]}
        />
      </>
    ),
    notice: (
      <>
        <Banner img="" arr={[{ name: "공지사항", path: "notice/notice" }]} />
        <NoticeContent />
      </>
    ),
  };

  let obj2 = {
    reservation: <ReserveContent setMode={setMode} mode={mode} />,
    reservationcheck: <div>예약 조회</div>,
    notice: <div>공지사항</div>,
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
