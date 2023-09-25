import { fireEvent } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/MainPage/Notice.css";

function Notice() {
  const [NoticeData, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let scrollEvent = function () {
      const title = document.querySelector(".제목");
      const noticeArr = document.querySelectorAll(".공지");

      //정적 이벤트 지점 수정 필요
      if (this.scrollY >= 1400) {
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

  useEffect(() => {
    axios
      .get("/notice/getall", {
        params: {
          size: 5,
          page: 0,
        },
      })
      .then((res) => {
        setData(res.data.content);
      })
      .catch((e) => {
        console.log(e);
      });
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
                <div className="공지제목">{a.subject}</div>
                <div className="공지내용">{a.content}</div>
              </div>
            </div>
          );
        })}
        <button
          className="자세히보기"
          onClick={() => {
            navigate("/notice");
          }}
        >
          자세히보기
        </button>
      </div>
    </div>
  );
}

export default Notice;
