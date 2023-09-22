import "../../css/MainPage/ImageSlide.css";
import { useEffect, useState } from "react";

function ImageSlide() {
  //====================
  //이미지 경로 담기
  //====================
  let imgarr = [
    "https://i.esdrop.com/d/f/2DJRPYKvvz/BcCHw1vUa0.jpg",
    "https://i.esdrop.com/d/f/2DJRPYKvvz/HvKrhWjk5S.jpg",
    "http://riahn.co.kr/niabbs5/upload/userfile/o_1h40gjqmf10d5al75gl1dhv1qsja.jpg",
  ];

  let [page, setPage] = useState(0);
  let [pageingOn, setPageingOn] = useState(false);
  let [intervalId, setIntervalId] = useState(null);
  let [intervalOn, setIntervalOn] = useState(true);

  //=========================
  // 다음 및 이전 버튼 함수
  //=========================

  // function onChangePageSequence(x) {
  //   setPageingOn(true);
  //   if (typeof x === "string" && x === "다음") {
  //     if (page < imgarr.length - 1) {
  //       setPage((prev) => prev + 1);
  //     }
  //   } else if (typeof x === "string" && x === "이전") {
  //     if (page > 0) setPage((prev) => prev - 1);
  //   }
  // }

  function onChangePageNumber(index) {
    setPageingOn(true);
    setPage(index);
    setIntervalOn(false);
  }

  useEffect(
    function () {
      if (pageingOn === false) {
        return;
      }
      document.querySelector("#Box").style.transform = `translateX(-${
        (100 / imgarr.length) * page
      }%)`;
      let arr = document.querySelectorAll(".NumberBtn");
      for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("selected");
      }
      arr[page].classList.add("selected");
    },
    [page]
  );

  useEffect(() => {
    if (intervalOn) {
      const id = setInterval(() => {
        setPage((prevPage) =>
          prevPage < imgarr.length - 1 ? prevPage + 1 : 0
        );
        setPageingOn(true);
      }, 3000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalOn]);

  return (
    <div>
      {/* <div style={{ height: "70px", background: "black" }}></div> */}
      <div className="IsContainer">
        <div
          className="IsBox"
          style={{ width: `${imgarr.length * 100}%` }}
          id="Box"
        >
          {imgarr.map(function (src, index) {
            return (
              <img
                className="IsImg"
                key={index}
                src={src}
                style={{ width: `${100 / imgarr.length}%` }}
                alt=""
              />
            );
          })}
        </div>
        <div className="NumberBtnBox">
          {imgarr.map(function (a, i) {
            return (
              <button
                className={i === 0 ? "NumberBtn selected" : "NumberBtn"}
                key={i}
                onClick={() => {
                  onChangePageNumber(i);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
