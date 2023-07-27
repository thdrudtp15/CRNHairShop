import { useState } from "react";
import "../../css/Notice/NoticeContent.css";
import data from "../MainPage/data";

function NoticeContent() {
  //============
  // 임시 데이터
  //============
  // console.log(data);
  return (
    <div className="notice-wrap">
      <div className="notice-box">
        <div className="notice-title">
          <span>공지사항</span>
        </div>
        <NoticeList data={data} />
      </div>
    </div>
  );
}

export default NoticeContent;

function NoticeList({ data }) {
  const [openStatus, setOpenStatus] = useState(
    data.map((e, i) => {
      return { id: e.id, status: false };
    })
  );

  const openNotice = (i) => {
    if (openStatus[i].status == false) {
      setOpenStatus((prev) => {
        return prev.map((a) => {
          return a.id === i ? { ...a, status: true } : { ...a, status: false };
        });
      });
    } else {
      setOpenStatus((prev) => {
        return prev.map((a) => {
          return { ...a, status: false };
        });
      });
    }
  };

  return (
    <div>
      {data.map((a, i) => {
        return (
          <div
            className="notice-list"
            key={i}
            onClick={() => {
              openNotice(i);
            }}
          >
            <div className="notice-bar">
              <div className="notice-type">중요공지</div>
              <div className="notice-subject">{a.title}</div>
              <div className="notice-date">2023.02.34</div>
              <div className="notice-status">
                <div className="plus X"></div>
                <div
                  className={`plus Y ${openStatus[i].status && "open"}`}
                ></div>
              </div>
            </div>
            <div className={`notice-detail ${openStatus[i].status && "Open"}`}>
              <div className="notice-content">{a.content}</div>
            </div>
          </div>
        );
      })}
    </div>
    // <div
    //   className="notice-list"
    //   onClick={() => {
    //     openNotice();
    //   }}
    // >
    //   <div className="notice-bar">
    //     <div className="notice-type">중요공지</div>
    //     <div className="notice-subject">제목입니다 제목입니다.</div>
    //     <div className="notice-date">2023.23.23</div>
    //     <div className="notice-status">
    //       <div className="plus X"></div>
    //       <div className={`plus Y ${plusStatus[0].status && "open"}`}></div>
    //     </div>
    //   </div>
    //   <div className="notice-detail">
    //     <div className="notice-content">
    //       <p>공지사항전달</p>
    //       <span>오늘은 휴업입니다.</span>
    //       <p>공지사항전달</p>
    //       <span>오늘은 휴업입니다.</span>
    //       <p>공지사항전달</p>
    //       <span>오늘은 휴업입니다.</span>
    //       <p>공지사항전달</p>
    //       <span>오늘은 휴업입니다.</span>
    //       <p>공지사항전달</p>
    //       <span>오늘은 휴업입니다.</span>
    //     </div>
    //   </div>
    // </div>
  );
}
