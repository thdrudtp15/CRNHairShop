import axios from "axios";
import { useState } from "react";

function GellaryWrite() {
  let [content, setContent] = useState("");
  let [subject, setSubject] = useState("");
  let [mainImg, setMainImg] = useState(null);
  let [imgs, setImgs] = useState(null);

  let [previewMainImg, setPvImg] = useState(null);
  let [previewImages, setPvImgs] = useState([]);

  function onChangeMainImg(e) {
    setMainImg(e.target.files);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPvImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  function onDeleteMainImg() {
    setMainImg(null);
    setPvImg(null);
  }

  function onChangeImgs(e) {
    const arr = [];
    const data = e.target.files;
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }
    setImgs(arr);

    const files = e.target.files;
    let imgsArr = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        imgsArr.push(e.target.result);
        if (imgsArr.length === files.length) {
          setPvImgs(imgsArr);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  function onDeleteImgs(img, index) {
    //이미지 미리보기 state 수정
    const newPreviewArr = previewImages.filter((image) => image !== img);
    setPvImgs(newPreviewArr);
    //실제 이미지 파일 state 수정
    let copy = [...imgs];
    //splice는 새로운 배열을 반환하지 않음
    //특정 부분을 잘라낼때 사용하면 된다..
    //왤케 까먹지..
    copy.splice(index, 1);
    setImgs(copy);
  }
  console.log(imgs);
  function onChangeSubject(e) {
    setSubject(e.target.value);
  }
  function onChangeContent(e) {
    setContent(e.target.value);
  }

  const onInsert = async () => {
    if (subject === "") {
      alert("제목 입력은 필수입니다.");
      return;
    } else if (content === "") {
      alert("내용 입력은 필수입니다.");
      return;
    }

    let formdata = new FormData();
    if (mainImg !== null) {
      formdata.append("mainImg", mainImg[0]);
    }
    //배열 형태의 파일의 경우 append 작업을 반복문으로 처리해야 한다
    //그냥 배열 통채로 보내면 스프링 부트에서 받질 못함
    if (imgs !== null) {
      for (let i = 0; i < imgs.length; i++) {
        console.log(imgs[i]);
        formdata.append("uploadfiles", imgs[i]);
      }
    }

    formdata.append("subject", subject);
    formdata.append("content", content);
    try {
      let result = await axios.post("/gellary/insert", formdata);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ width: 300, height: 300, margin: "200px auto" }}>
      <div>
        제목
        <input
          type="text"
          value={subject}
          onChange={(e) => {
            onChangeSubject(e);
          }}
        />
      </div>
      <div>
        내용
        <input
          type="text"
          value={content}
          onChange={(e) => {
            onChangeContent(e);
          }}
        />
      </div>
      <div>
        메인이미지
        <input
          type="file"
          onChange={(e) => {
            onChangeMainImg(e);
          }}
        />
      </div>
      <div>
        부가 이미지
        <input
          type="file"
          multiple
          onChange={(e) => {
            onChangeImgs(e);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            onInsert();
          }}
        >
          작성
        </button>
      </div>
      {previewMainImg !== null && (
        <div style={{ width: 100, height: 100, position: "relative" }}>
          <img
            src={previewMainImg}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              background: "rgba(0,0,0,0.5)",
              color: "white",
            }}
            onClick={() => {
              onDeleteMainImg();
            }}
          >
            오버레이
          </div>
        </div>
      )}
      {previewImages.map((img, index) => {
        return (
          <div
            style={{ width: 100, height: 100, position: "relative" }}
            key={index}
          >
            <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                background: "rgba(0,0,0,0.5)",
                color: "white",
              }}
              onClick={(e) => {
                onDeleteImgs(img, index);
              }}
            >
              오버레이
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GellaryWrite;
