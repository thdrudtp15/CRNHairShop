//공지사항 작성 부분
//로그인 기능 생성 후 관리자 ID로만 접근이 가능해야 함.

import axios from "axios";
import { useState } from "react";

function NoticeWrite() {
  let [subject, setSubject] = useState("");
  let [content, setContent] = useState("");
  let [noticeCatg, setNoticeCatg] = useState("일반공지");

  function onChangeNoticeCatg(e) {
    setNoticeCatg(e.target.value);
    console.log(e.target.value);
  }

  function onChangeSubject(e) {
    setSubject(e.target.value);
  }
  function onChangeContent(e) {
    setContent(e.target.value);
  }

  const handleSubmit = async () => {
    axios
      .post("/notice/write", {
        subject: subject,
        content: content,
        type: noticeCatg,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ width: "300px", height: "300px", margin: "200px auto" }}>
      <Select onChange={onChangeNoticeCatg} />
      <div>
        제목{" "}
        <input
          type="text"
          onChange={(e) => {
            onChangeSubject(e);
          }}
        />
      </div>
      <div>
        내용{" "}
        <textarea
          type="text"
          onChange={(e) => {
            onChangeContent(e);
          }}
        />
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        작성
      </button>
    </div>
  );
}

export default NoticeWrite;

function Select({ onChange }) {
  let selectArr = ["일반공지", "이벤트", "신규서비스", "휴무안내", "중요공지"];

  return (
    <div>
      공지사항 종류
      <select
        onChange={(e) => {
          onChange(e);
        }}
      >
        {selectArr.map((elmt, index) => {
          return (
            <option value={elmt} key={index}>
              {elmt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
