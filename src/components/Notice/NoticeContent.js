import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/Notice/NoticeContent.css";

function NoticeContent() {
  //============
  // 임시 데이터
  //============
  // console.log(data);
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

function NoticeList() {
  const [data, setData] = useState([]);
  const [openStatus, setOpenStatus] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [pages, setPages] = useState([]);

  const wishCount = 3;

  const openNotice = (i) => {
    if (openStatus[i].status === false) {
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

  useEffect(() => {
    axios
      .get("/notice/get", {})
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setOpenStatus(
          res.data.map((e, i) => {
            return { id: i, status: false };
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, [nowPage]);

  useEffect(() => {
    axios
      .get("/notice/count", {})
      .then((res) => {
        let totalCount = res.data;
        let totalPage = Math.ceil(totalCount / wishCount);
        let arr = [];
        for (let i = 1; i <= totalPage; i++) {
          arr.push(i);
        }
        setPages(arr);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(openStatus);
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
              <div className="notice-type">{a.type}</div>
              <div className="notice-subject">
                <span className={`subject ${openStatus[i].status && "opeN"}`}>
                  {a.subject}
                </span>
              </div>
              <div className="notice-date">{a.date}</div>
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
      <div>
        {pages.map((a, i) => {
          return <div>{a}</div>;
        })}
      </div>
    </div>
  );
}
