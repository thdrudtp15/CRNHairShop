import "../../../css/Reserve/ResvInq/ResvInq.css";
import axios from "axios";
import { useState } from "react";

function ResvInqContent() {
  let [phone, setPhone] = useState("");
  let [code, setCode] = useState("");

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onInquiry = () => {
    axios
      .get("/reservation/inquiry", { params: { code: code, phone: phone } })
      .then((res) => {
        if (res.data === "") alert("조회하신 정보가 없습니다.");
        else console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="Content-wrap">
      <div className="resvInq-box">
        <div>
          휴대폰 번호 :{" "}
          <input
            type="text"
            onChange={(e) => {
              onChangePhone(e);
            }}
          ></input>
        </div>
        <div>
          예약 코드 :{" "}
          <input
            type="text"
            onChange={(e) => {
              onChangeCode(e);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            onInquiry();
          }}
        >
          조회
        </button>
      </div>
    </div>
  );
}

export default ResvInqContent;
