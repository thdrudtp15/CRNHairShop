import "../../../css/Reserve/ReserveContent.css";
import "../../../css/Reserve/datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
function Schedule({
  selectDate,
  selectTime,
  오전,
  오후,
  onChnageDate,
  onChnageTime,
}) {
  const 지난날제외 = (date) => {
    return (
      date >= new Date() || date.toDateString() === new Date().toDateString()
    );
  };

  const sundayIndex = 0;
  const saturdayIndex = 6;

  const weekendColor = (date) => {
    const dayIndex = date.getDay();
    return dayIndex === sundayIndex || dayIndex === saturdayIndex;
  };
  const dayClassName = (date) => {
    if (weekendColor(date)) {
      return "sunday"; // CSS 클래스 이름
    }
    return null; // 일반적인 날짜의 경우 클래스를 지정하지 않음
  };

  return (
    <div>
      <div className="scheduleBox">
        <DatePicker
          selected={selectDate}
          onChange={(date) => onChnageDate(date)}
          filterDate={지난날제외}
          dayClassName={dayClassName}
          locale={ko}
          dateFormat="yyyy-MM-dd"
          inline
        />
        <div className="timeSelectBox">
          <div className="date">
            <div className="tsb1 positionCenter">날짜</div>
            <div className="tsb2 positionCenter">
              {selectDate.toISOString().slice(0, 10)}
            </div>
          </div>
          <div className="date">
            <div className="tsb1 positionCenter">시간</div>
            <div className="tsb2 positionCenter" id="date">
              {selectTime === "" ? (
                <span style={{ color: "gray" }}>시간을 선택해주세요</span>
              ) : (
                <span>{selectTime}</span>
              )}
            </div>
          </div>
          <Timesec arr={오전} tit="오전" setter={onChnageTime} />
          <Timesec arr={오후} tit="오후" setter={onChnageTime} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;

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
