import axios from "axios";
import { useState } from "react";
import "../css/Common/Login.css";

function Login() {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangePw(e) {
    setPw(e.target.value);
  }

  return (
    <div className="login-wrap">
      <div className="login-container">
        <div className="login-area">
          <div className="login-inputBox">
            <div>아이디</div>
            <input
              onChange={(e) => {
                onChangeId(e);
              }}
            ></input>
          </div>
          <div className="login-inputBox">
            <div>비밀번호</div>
            <input
              onChange={(e) => {
                onChangePw(e);
              }}
            ></input>
          </div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
