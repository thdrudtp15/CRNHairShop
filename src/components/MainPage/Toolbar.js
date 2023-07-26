import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiWon } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import "../../css/MainPage/Toolbar.css";
import date from "../../images/icons8-date-96.png";
import price from "../../images/icons8-price-96.png";
import location from "../../images/icons8-location-96.png";

function Toolbar() {
  let [reisze, setResize] = useState(false);
  useEffect(() => {
    const scrollEvent = function () {
      let y = this.scrollY;
      if (y > 300) {
        document.querySelector("#tbtitle").classList.add("sighted");
      } else {
        document.querySelector("#tbtitle").classList.remove("sighted");
      }

      if (y > 400) {
        document.querySelector("#tbtoolbox").classList.add("sighted");
      } else {
        document.querySelector("#tbtoolbox").classList.remove("sighted");
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className="toolbar-container">
      <div className="toolbar-title" id="tbtitle">
        SERVICES
      </div>
      <div className="toolbar-toolbox" id="tbtoolbox">
        <ToolBtn
          text="실시간 예약"
          text2="원하는 날짜와 시간에 바로 예약해보세요."
          icon={date}
        />
        <ToolBtn
          text="가격표"
          text2="시술 가격을 확인하고 싶으신가요?"
          icon={price}
        />
        <ToolBtn
          text="매장 위치"
          text2="매장 위치를 확인하고 싶으신가요?"
          icon={location}
        />
      </div>
    </div>
  );
}

export default Toolbar;

function ToolBtn({ text, text2, icon }) {
  return (
    <div className="toolbar-toolbtn">
      <div className="toolbar-header">
        <span>{text}</span>
        <p>{text2}</p>
      </div>
      <div className="toolbar-footer">
        <div className="toolbar-iconbox">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
