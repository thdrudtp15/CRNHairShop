import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/Notice/NoticeContent.css";
import NoticeList from "./NoticeList";

function NoticeContent() {
  return (
    <div className="notice-wrap">
      {/* <div className="location-title">공지사항</div> */}
      <div className="notice-box">
        {/* <div className="lastestNotice">최근공지</div> */}
        <div className="notice-title"></div>
        <NoticeList />
      </div>
    </div>
  );
}

export default NoticeContent;
