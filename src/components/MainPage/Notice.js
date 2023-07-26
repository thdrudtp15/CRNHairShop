import { fireEvent } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/MainPage/Notice.css";
import data from "./data";

//==============================
//공지사항 같은 경우는 백엔드 작업이 필요함.
//임의의 데이터를 json으로 만들어 작업.
//==============================

function Notice() {
  const [NoticeData, setData] = useState(data);
  const navigate = useNavigate();
  useEffect(() => {
    let scrollEvent = function () {
      const title = document.querySelector(".제목");
      const noticeArr = document.querySelectorAll(".공지");

      if (this.scrollY >= 1500) {
        title.classList.add("제목올려");
      } else {
        title.classList.remove("제목올려");
      }

      if (this.scrollY >= 1600 && this.scrollY < 1700) {
        for (let i = 0; i < noticeArr.length; i++) {
          noticeArr[i].classList.add(`제목올려${i}`);
        }
      } else if (this.scrollY < 1600) {
        for (let i = 0; i < noticeArr.length; i++) {
          noticeArr[i].classList.remove(`제목올려${i}`);
        }
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className="Notice-container">
      <div className="공지사항미리보기박스">
        <div className="제목">NOTICE</div>
        {NoticeData.map(function (a, i) {
          return (
            <div key={i} className="공지">
              <div className="순서및날짜">
                <div className="순서">{i + 1}</div>
                <div className="날짜">{a.date}</div>
              </div>
              <div className="제목및내용">
                <div className="공지제목">{a.title}</div>
                <div className="공지내용">{a.content}</div>
              </div>
            </div>
          );
        })}
        <button
          className="자세히보기"
          onClick={() => {
            navigate("/NOTICE");
          }}
        >
          자세히보기
        </button>
      </div>
    </div>
  );
}

export default Notice;
