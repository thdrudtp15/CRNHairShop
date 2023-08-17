import "../../../css/Reserve/Resv/Complete.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function Complete({
  code,
  selectService,
  resvName,
  resvPhone,
  price,
  selectTime,
  selectDate,
  setMode,
}) {
  const infoArray = [
    {
      infoname: "예약 서비스",
      content: selectService,
    },
    {
      infoname: "예약 날짜",
      content: selectDate.toISOString().slice(0, 10),
    },
    {
      infoname: "예약 시간",
      content: selectTime,
    },
    {
      infoname: "예약자 이름",
      content: resvName,
    },
    {
      infoname: "휴대폰 번호",
      content: resvPhone,
    },
    {
      infoname: "예상 가격",
      content: price.toLocaleString() + "원",
    },
  ];
  const navigate = useNavigate();
  const cancelReservation = () => {
    const result = window.confirm("예약을 취소하시겠습니까?");
    if (result) {
      axios
        .post("http://localhost:8080/reservation/cancel", {
          code: code,
          name: resvName,
          phone: resvName,
        })
        .then((res) => {
          alert(res.data);
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  useEffect(() => {
    return () => {
      setMode(false);
    };
  }, []);

  return (
    <div className="Complete-wrap">
      <div className="Complete-contentBox">
        <div className="Complete-message">
          예약 신청이 정상적으로 처리되었습니다
        </div>
        {infoArray.map((a, i) => (
          <div className="Complete-infoBox" key={i}>
            <div className="Complete-info">
              <div className="Complete-title">{a.infoname}</div>
              <div className="Complete-text">{a.content}</div>
            </div>
          </div>
        ))}
        <div className="Complete-infoBox lastTag">
          <div className="Complete-info passwordBox">
            <div className="Complete-title">예약 코드</div>
            <div className="Complete-text">
              <div className="passwordText">
                <div className="Complete-password">{code}</div>
                <div className="veryImportant">
                  *해당 예약 코드는 예약의 조회,취소,변경에 이용되므로 반드시
                  숙지 바랍니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Complete-btnBox">
          <div
            className="Complete-btn Complete-cancel"
            onClick={() => {
              cancelReservation();
            }}
          >
            취소
          </div>
          <div
            className="Complete-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complete;
