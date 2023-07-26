import "../../css/Notice/NoticeContent.css";
import data from "../MainPage/data";

function NoticeContent() {
  //============
  // 임시 데이터
  //============
  console.log(data);
  return (
    <div className="notice-wrap">
      <div className="notice-box">
        <div className="notice-title">
          <span>공지사항</span>
        </div>
        <NoticeList />
      </div>
    </div>
  );
}

export default NoticeContent;

function NoticeList() {
  return (
    <div className="notice-list">
      <div className="notice-type">중요공지</div>
      <div className="notice-subject">제목입니다 제목입니다.</div>
      <div className="notice-date">2023.23.23</div>
      <div className="notice-status">
        <div className="plus X"></div>
        <div className="plus Y"></div>
      </div>
    </div>
  );
}
