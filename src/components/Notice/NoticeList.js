import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/Notice/NoticeContent.css";

function NoticeList() {
  const [data, setData] = useState([]);
  const [openStatus, setOpenStatus] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [nowPageStatus, setNowPageStatus] = useState([]);
  const [loading, setLoading] = useState(false);

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
      .get("/notice/get", {
        params: {
          size: 8,
          page: nowPage,
        },
      })
      .then((res) => {
        const data = res.data.content;
        setData(data);
        setOpenStatus(
          data.map((e, i) => {
            return { id: i, status: false };
          })
        );
        let arr = [];
        for (let i = 0; i < res.data.totalPages; i++) {
          arr.push(i + 1);
        }
        setPages(arr);
        let stArr = [];
        for (let i = 0; i < res.data.totalPages; i++) {
          if (nowPage === i) {
            stArr.push({ id: i, status: true });
          } else {
            stArr.push({ id: i, status: false });
          }
        }
        setNowPageStatus(stArr);
        setLoading(true);
      })
      .catch((e) => {
        alert("네트워크 통신이 원활하지 않습니다!");
        setLoading(true);
        console.log(e);
      });
  }, [nowPage]);

  const onChangeNowPage = (num) => {
    setNowPage(num);
  };
  const onChangeNowPageSeq = (type) => {
    if (type === "prev") {
      if (nowPage > 0) {
        setNowPage((prev) => prev - 1);
      }
    } else {
      if (nowPage < pages.length - 1) {
        setNowPage((prev) => prev + 1);
      }
    }
  };

  // function 공지입력() {
  //   axios
  //     .post("/notice/write", {})
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  console.log(data);
  return (
    <div>
      {/* <button
        onClick={() => {
          공지입력();
        }}
      >
        버튼
      </button> */}
      {data.length === 0 && (
        <div className="nonexistentData">공지사항이 없습니다.</div>
      )}
      {loading === false && (
        <div className="noticeLoading">잠시만 기다려주세요.</div>
      )}
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
      <div className="notice-pageing">
        {pages.length !== 0 && (
          <div
            className="seqBtn"
            onClick={() => {
              onChangeNowPageSeq("prev");
            }}
          >
            이전
          </div>
        )}
        {pages.map((a, i) => {
          return (
            <span
              key={i}
              className={`pageNum ${nowPageStatus[i].status && "oPEN"}`}
              onClick={() => {
                onChangeNowPage(i);
              }}
            >
              {a}
            </span>
          );
        })}
        {pages.length !== 0 && (
          <div
            className="seqBtn"
            onClick={() => {
              onChangeNowPageSeq("next");
            }}
          >
            다음
          </div>
        )}
      </div>
    </div>
  );
}

export default NoticeList;

//공지사항 종류
// 중요공지, 이벤트, 신규서비스, 휴무 안내, 일반
