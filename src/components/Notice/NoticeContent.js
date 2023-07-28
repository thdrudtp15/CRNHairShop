import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/Notice/NoticeContent.css";
import NoticeList from "./NoticeList";

function NoticeContent() {
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8080/notice/write", {})
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  return (
    <div className="notice-wrap">
      <div className="notice-box">
        <div className="최근공지">최근공지</div>
        <div className="notice-title">
          <span>공지사항</span>
        </div>
        <NoticeList />
      </div>
    </div>
  );
}

export default NoticeContent;
