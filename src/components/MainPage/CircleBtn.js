import { BiMouse, BiNotepad, BiWon } from "react-icons/bi";
import { GeoAlt } from "react-bootstrap-icons";
import "../../css/MainPage/CircleBtn.css";

function CircleBtn() {
  function Btn({ icon, text }) {
    return (
      <div className="Main-BtnBox">
        <div className="Main-Btn">
          <div className="Main-BtnBg">{icon}</div>
          <div className="Main-BtnText">{text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Main-ReseveAndPrice">
      <div className="Main-BtnContainer">
        <Btn icon={<BiNotepad />} text="실시간 예약" />
        <Btn icon={<BiWon />} text="가격표" />
        <Btn icon={<GeoAlt />} text="위치" />
      </div>
    </div>
  );
}

export default CircleBtn;
