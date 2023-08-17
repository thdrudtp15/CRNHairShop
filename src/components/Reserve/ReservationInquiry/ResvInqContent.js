import "../../../css/Reserve/ResvInq/ResvInq.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResvInqContent() {
  let [phone, setPhone] = useState("");
  let [code, setCode] = useState("");
  let [inqData, setInqData] = useState([]);
  let [inqMode, setInqMode] = useState(false);
  const navigate = useNavigate();

  const onChangePhone = (e) => {
    const formatPhoneNumber = (inputValue) => {
      const value = inputValue.replace(/\D/g, "");
      if (value.length > 3 && value.length <= 7) {
        return value.replace(/(\d{3})(\d{1,4})/, "$1-$2");
      } else if (value.length > 7) {
        return value.replace(/(\d{3})(\d{4})(\d{0,4})/, "$1-$2-$3");
      } else {
        return value;
      }
    };
    e.target.value = formatPhoneNumber(e.target.value);
    setPhone(e.target.value);
  };
  const onChangeCode = (e) => {
    if (e.target.value.includes(" ")) {
      alert("공백은 입력할 수 없습니다.");
      setCode("");
    } else setCode(e.target.value);
  };

  const onInquiry = () => {
    axios
      .get("/reservation/inquiry", { params: { code: code, phone: phone } })
      .then((res) => {
        if (res.data === "") alert("조회하신 정보가 없습니다.");
        else {
          console.log(res.data);
          setInqData(res.data);
          setInqMode(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let array = [
    { title: "예약 코드", tool: onChangeCode, value: code },
    { title: "예약자 휴대폰", tool: onChangePhone, value: phone },
  ];

  return (
    <div className="Content-wrap">
      <div className="resvInq-box">
        {inqMode === false && (
          <div>
            <div className="inq-input">
              {array.map((a, i) => (
                <div className="Complete-infoBox" key={i}>
                  <div className="Complete-info">
                    <div className="Complete-title">{a.title}</div>
                    <div className="Complete-text">
                      <input
                        id="inq-input"
                        onChange={a.tool}
                        maxLength="13"
                        placeholder={`${a.title}를(을) 입력해주세요`}
                        value={a.value}
                      ></input>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="Complete-btnBox">
              <div
                className="Complete-btn Complete-cancel"
                onClick={() => {
                  navigate("/");
                }}
              >
                취소
              </div>
              <div
                className="Complete-btn"
                onClick={() => {
                  onInquiry();
                }}
              >
                조회
              </div>
            </div>
          </div>
        )}
        {inqMode === true && <InqComplete data={inqData} navigate={navigate} />}
      </div>
    </div>
  );
}

export default ResvInqContent;

function InqComplete({ data, navigate }) {
  const inqCancel = () => {
    const confirm = window.confirm("예약을 취소하시겠습니까?");

    if (confirm) {
      //포스트는 요청을 바디에 담는다.
      axios
        .post("http://localhost:8080/reservation/cancel", {
          code: data.code,
          name: data.name,
          phone: data.phone,
        })
        .then((res) => {
          alert(res.data);
          navigate("/");
        })
        .catch((e) => {
          alert("통신 오류 발생");
        });
    }
  };

  const infoArray = [
    {
      title: "예약 서비스",
      content: data.service,
    },
    {
      title: "예약 날짜",
      content: data.date,
    },
    {
      title: "예약 시간",
      content: data.restime,
    },
  ];
  return (
    <div>
      <div className="Complete-message">예약 조회가 완료 되었습니다.</div>
      <div>
        {infoArray.map((a, i) => (
          <div className="Complete-infoBox" key={i}>
            <div className="Complete-info">
              <div className="Complete-title">{a.title}</div>
              <div className="Complete-text inq-content">{a.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="Complete-btnBox">
        <div className="Complete-btn Complete-cancel" onClick={() => {}}>
          확인
        </div>
        <div
          className="Complete-btn"
          onClick={() => {
            inqCancel();
          }}
        >
          예약취소
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
