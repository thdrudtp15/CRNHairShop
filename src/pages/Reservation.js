import Banner from "../components/Common/Banner";
import Navbar from "../components/MainPage/Navbar.js";
import Footer from "../components/MainPage/Footer";
import ReserveContent from "../components/Reserve/Reservation/ReserveContent";
import ResvInqContent from "../components/Reserve/ReservationInquiry/ResvInqContent";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Reservation() {
  const { detail } = useParams();
  const [mode, setMode] = useState(false);

  return (
    <div>
      <Navbar />
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
      {detail === "reservation" && (
        <ReserveContent setMode={setMode} mode={mode} />
      )}
      {detail === "reservationcheck" && <ResvInqContent />}

      <Footer />
    </div>
  );
}

export default Reservation;
