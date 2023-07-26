import { useEffect } from "react";
import "../../css/Reserve/Progress.css";
function ReservationProgress({ mode }) {
  if (mode === false) {
    return (
      <div className="progress-wrap">
        <div className="line"></div>
        <div className="progress-box">
          <div className="progress-1">
            <div className="progress-circle">
              <div className="progress-innercircle">1</div>
            </div>
          </div>
          <div className="progress-2">예약정보 작성</div>
        </div>
        <div className="progress-box">
          <div className="progress-1">
            <div className="progress-circle prevCircle">
              <div className="progress-innercircle previnnerCircle">2</div>
            </div>
          </div>
          <div className="progress-2 prevProgress">예약 완료</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="progress-wrap">
        <div className="line"></div>
        <div className="progress-box">
          <div className="progress-1">
            <div className="progress-circle prevCircle">
              <div className="progress-innercircle previnnerCircle">1</div>
            </div>
          </div>
          <div className="progress-2 prevProgress">예약정보 작성</div>
        </div>
        <div className="progress-box">
          <div className="progress-1">
            <div className="progress-circle">
              <div className="progress-innercircle">2</div>
            </div>
          </div>
          <div className="progress-2">예약 완료</div>
        </div>
      </div>
    );
  }
}

export default ReservationProgress;
