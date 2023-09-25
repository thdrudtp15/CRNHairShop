import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function NoticeEdit() {
  const { id } = useParams();
  let [subject, setSubject] = useState("");
  let [content, setContent] = useState("");
  let [noticeCatg, setNoticeCatg] = useState("");
  let [noticeId, setId] = useState(0);

  useEffect(() => {
    const getNotice = async () => {
      try {
        let result = await axios.get("/notice/get", { params: { id: id } });
        let { data } = result;
        setContent(data.content);
        setSubject(data.subject);
        setNoticeCatg(data.type);
        setId(data.id);
      } catch (e) {
        console.log(e);
      }
    };
    getNotice();
  }, []);

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
      .post("/notice/edit", {
        id: noticeId,
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
      <Select onChange={onChangeNoticeCatg} noticeCatg={noticeCatg} />
      <div>
        제목{" "}
        <input
          type="text"
          value={subject}
          onChange={(e) => {
            onChangeSubject(e);
          }}
        />
      </div>
      <div>
        내용{" "}
        <textarea
          value={content}
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

export default NoticeEdit;

function Select({ onChange, noticeCatg }) {
  let selectArr = ["일반공지", "이벤트", "신규서비스", "휴무안내", "중요공지"];

  return (
    <div>
      공지사항 종류
      <select
        value={noticeCatg}
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
