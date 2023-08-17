import "../../../css/Reserve/Resv/ReserveContent.css";
import "../../../css/Reserve/Resv/datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import ko from "date-fns/locale/ko";
import axios from "axios";
import ServiceBox from "./ServiceBox";
import Complete from "./Complete";
import Schedule from "./Schedule";

//7.6 오류
// innerHTML을 state로 바꿨더니 오류 발생

function ReserveContent({ mode, setMode }) {
  const [reservedTime, setReservedTime] = useState([]);
  const [selectDate, setSelectDate] = useState(
    new Date()
    //.toISOString().slice(0, 10)
  );
  const [selectTime, setSelectTime] = useState("");
  const [selectService, setSelectService] = useState("");
  const [resvName, setResvName] = useState("");
  const [resvPhone, setResvPhone] = useState("");
  const [price, setPrice] = useState(0);
  //const [mode, setMode] = useState(false);
  const [code, setCode] = useState("");

  const [오전, set오전] = useState([
    { time: "09:00", res: false },
    { time: "09:30", res: false },
    { time: "10:00", res: false },
    { time: "10:30", res: false },
    { time: "11:00", res: false },
    { time: "11:30", res: false },
    { time: "12:00", res: false },
  ]);

  const [오후, set오후] = useState([
    { time: "01:00", res: false },
    { time: "01:30", res: false },
    { time: "02:00", res: false },
    { time: "02:30", res: false },
    { time: "03:00", res: false },
    { time: "03:30", res: false },
    { time: "04:00", res: false },
    { time: "04:30", res: false },
    { time: "05:00", res: false },
    { time: "05:30", res: false },
    { time: "06:00", res: false },
  ]);

  const onChnageTime = (time, tit, e) => {
    setSelectTime(time);
    let tagArr = document.querySelectorAll(".list");
    for (let i = 0; i < tagArr.length; i++) {
      tagArr[i].classList.remove("slctTime");
    }
    e.target.classList.add("slctTime");
  };

  const onChnageDate = (date) => {
    setSelectDate(date);
  };

  useEffect(() => {
    const getDateData = async () => {
      try {
        let res = await axios.get("http://localhost:8080/reservation/search", {
          params: { date: selectDate.toISOString().slice(0, 10) },
        });
        let { data } = res;
        let copy = [...오전];
        let copy2 = [...오후];
        copy.forEach((item) => {
          if (data.includes(item.time)) {
            item.res = true;
          } else {
            item.res = false;
          }
        });
        set오전(copy);

        copy2.forEach((item) => {
          if (data.includes(item.time)) {
            item.res = true;
          } else {
            item.res = false;
          }
        });
        set오후(copy2);
      } catch (e) {
        console.log(e);
      }
    };
    let tagArr = document.querySelectorAll(".list");
    for (let i = 0; i < tagArr.length; i++) {
      tagArr[i].classList.remove("slctTime");
    }
    setSelectTime("");
    getDateData();
  }, [selectDate]);

  if (mode === false) {
    return (
      <div>
        <div className="Content-wrap">
          <Schedule
            selectDate={selectDate}
            selectTime={selectTime}
            오전={오전}
            오후={오후}
            onChnageDate={onChnageDate}
            onChnageTime={onChnageTime}
          />
          <ServiceBox
            selectDate={selectDate}
            selectTime={selectTime}
            code={code}
            setCode={setCode}
            setMode={setMode}
            setSelectService={setSelectService}
            setResvName={setResvName}
            setResvPhone={setResvPhone}
            setPrice={setPrice}
            selectService={selectService}
            resvName={resvName}
            resvPhone={resvPhone}
            price={price}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Complete
          code={code}
          selectService={selectService}
          resvName={resvName}
          resvPhone={resvPhone}
          price={price}
          selectDate={selectDate}
          selectTime={selectTime}
          setMode={setMode}
        />
      </div>
    );
  }
}

export default ReserveContent;

function Timesec({ arr, tit, setter }) {
  return (
    <div className="timesec">
      <div className="tsb1">{tit}</div>
      <div className="tsb2">
        <div>
          {arr.map((a, i) => {
            return (
              <span key={i} className="listBox">
                {a.res === false ? (
                  <div
                    className="list reserveO"
                    onClick={(e) => {
                      setter(a.time, tit, e);
                    }}
                  >
                    {a.time}
                  </div>
                ) : (
                  <li className="list reserveX">{a.time}</li>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
