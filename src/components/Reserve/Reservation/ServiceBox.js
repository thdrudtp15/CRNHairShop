import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate, useSearchParams } from "react-router-dom";
import "../../../css/Reserve/Resv/ServiceBox.css";
import serviceCatg from "./serviceCatg";
import serviceData from "./serviceData";
import axios from "axios";

function ServiceBox({
  selectTime,
  selectDate,
  setMode,
  code,
  setCode,
  setSelectService,
  setResvName,
  setResvPhone,
  setPrice,
  selectService,
  resvName,
  resvPhone,
  price,
}) {
  const [selectCatg, setSelectCatg] = useState(serviceCatg[0]);
  const [service, setService] = useState([]);
  const [checkCode, setCheckCode] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let tags = document.querySelectorAll(".service-catg");
    tags.forEach((a) => {
      a.classList.remove("select-serviceCatg");
    });
    document.getElementById(selectCatg).classList.add("select-serviceCatg");
    let filter = serviceData.filter((a) => {
      return a.category === selectCatg;
    });
    setService(filter);
  }, [selectCatg]);

  const onChangeCatg = (e) => {
    setSelectService("");
    setSelectCatg(e.target.dataset.id);
  };

  const serviceReserve = () => {
    if (selectTime === "") {
      alert("시간 선택은 필수입니다.");
      return;
    } else if (selectService === "") {
      alert("원하시는 시술을 선택해주세요.");
      return;
    } else if (checkCode === false) {
      alert("중복확인을 완료해주세요");
      return;
    }

    let formData = new FormData();
    formData.append("date", selectDate.toISOString().slice(0, 10));
    formData.append("time", selectTime);
    formData.append("service", selectService);
    formData.append("name", resvName);
    formData.append("phone", resvPhone);
    formData.append("price", price);
    formData.append("code", code);

    axios
      .post("http://localhost:8080/reservation/reserve", formData)
      .then((res) => {
        setMode(true);
      })
      .catch((e) => {
        alert("오류 발생!!");
      });
  };

  const checkingCode = () => {
    if (code === "" && code.length < 6) {
      alert("코드를 입력해주세요");
      setCheckCode(false);
      return;
    }

    let formData = new FormData();
    formData.append("code", code);
    axios
      .post("http://localhost:8080/reservation/checkingcode", formData)
      .then((res) => {
        if (res.data >= 1) {
          alert("중복되는 코드가 존재합니다.");
        } else {
          alert("중복확인이 완료되었습니다.");
          setCheckCode(true);
        }
      });
  };

  const onChangeName = (e) => {
    const validNamePattern = /^([가-힣]{2,})$/;
    if (validNamePattern.test(e.target.value) === true) {
      e.target.nextSibling.classList.remove("denied");
      e.target.nextSibling.classList.add("access");
      e.target.nextSibling.innerHTML = "입력완료";
      setCheckName(true);
    } else {
      e.target.nextSibling.innerHTML = "이름의 형식이 올바르지 않습니다.";
      e.target.nextSibling.classList.add("denied");
      setCheckName(false);
    }
    setResvName(e.target.value);
  };
  const onChangePhone = (e) => {
    const formatPhoneNumber = (inputValue) => {
      const value = inputValue.replace(/\D/g, "");
      if (value.length > 3 && value.length <= 7) {
        return value.replace(/(\d{3})(\d{1,4})/, "$1-$2");
      } else if (value.length > 7) {
        return value.replace(/(\d{3})(\d{4})(\d{0,4})/, "$1-$2-$3");
      } else {
        return value;
      }
    };
    e.target.value = formatPhoneNumber(e.target.value);
    const koreanPhoneNumberPattern = /^010-\d{4}-\d{4}$/;
    if (koreanPhoneNumberPattern.test(e.target.value) === true) {
      e.target.nextSibling.classList.remove("denied");
      e.target.nextSibling.classList.add("access");
      e.target.nextSibling.innerHTML = "입력완료";
      setCheckPhone(true);
    } else {
      e.target.nextSibling.innerHTML = "올바른 형식의 번호를 입력해주세요.";
      e.target.nextSibling.classList.add("denied");
      setCheckPhone(false);
    }

    setResvPhone(e.target.value);
  };
  const onChangePw = (e) => {
    setCheckCode(false);
    e.target.nextSibling.innerHTML = "코드의 중복을 확인해주세요.";
    e.target.nextSibling.classList.add("denied");
    setCode(e.target.value);
  };

  useEffect(() => {
    if (checkCode === true) {
      const tag = document.querySelector("#codemessage");
      tag.innerHTML = "중복확인 완료";
      tag.classList.remove("denied");
      tag.classList.add("access");
    }
  }, [checkCode]);

  return (
    <div>
      <div className="service-wrap">
        <div className="service-navbar">
          {serviceCatg.map((a, i) => (
            <div
              key={i}
              className="service-catg"
              data-id={a}
              id={a}
              onClick={(e) => {
                onChangeCatg(e);
              }}
            >
              {a}
            </div>
          ))}
        </div>
        <div>
          <form>
            {service.map((a, i) => (
              <span key={i}>
                <CatgContent
                  data={a}
                  selectService={selectService}
                  setSelectService={setSelectService}
                  setPrice={setPrice}
                />
              </span>
            ))}
          </form>
        </div>
      </div>
      <div className="privacyinput-box">
        <div className="privacyinput-header">
          <div className="privacyinput-headerContent">예약자 정보입력</div>
        </div>
        <div className="privacyinput-content">
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => {
                onChangeName(e);
              }}
              placeholder="예약자 성명"
            />
            <div className="alarm"></div>
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => {
                onChangePhone(e);
              }}
              maxLength={13}
              placeholder="휴대폰번호"
            />
            <div className="alarm"></div>
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => {
                onChangePw(e);
              }}
              placeholder="예약 코드"
            />
            <div className="alarm" id="codemessage">
              코드의 중복을 확인해주세요.
            </div>
            <button
              onClick={() => {
                checkingCode();
              }}
            >
              중복확인
            </button>
          </div>
        </div>
      </div>
      <div className="decision-box">
        <div className="decision-btn backbtn">뒤로가기</div>
        <div
          className="decision-btn"
          onClick={() => {
            serviceReserve();
          }}
        >
          예약하기
        </div>
      </div>
    </div>
  );
}
export default ServiceBox;

function CatgContent({ data, selectService, setSelectService, setPrice }) {
  const onChangeService = (e, price) => {
    setSelectService(e.target.id);
    setPrice(price);
  };

  return (
    <div className="service-box">
      <div className="serviceCheckBox">
        <input
          type="radio"
          name="service"
          id={data.serviceName}
          checked={selectService === data.serviceName}
          onChange={(e) => {
            onChangeService(e, data.price);
          }}
        />
        <span>
          <label htmlFor={data.serviceName} style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;{data.serviceName}
          </label>
        </span>
      </div>
      <div className="servicePrice">{data.price.toLocaleString()}원</div>
    </div>
  );
}
