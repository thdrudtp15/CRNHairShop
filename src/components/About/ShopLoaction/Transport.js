import "../../../css/About/Transport.css";
import { FaBus } from "react-icons/fa";
import { BsCarFrontFill, BsBusFrontFill } from "react-icons/bs";

function Transport() {
  return (
    <div className="transport-wrap">
      <Trst text="자가용" logo={<BsCarFrontFill />} extext={<Cartext />} />
      <Trst text="버스" logo={<BsBusFrontFill />} extext={<BusText />} />
    </div>
  );
}

export default Transport;

function Trst({ text, logo, extext }) {
  return (
    <div className="transport-box">
      <span className="transport-logo">
        <div className="trstcircle-box">
          <div className="trstcircle">{logo}</div>
          <div className="trsttext">{text}</div>
        </div>
      </span>
      {extext}
    </div>
  );
}

function Cartext() {
  return (
    <div className="btcont centre">
      주차장이 협소하여 이용이 불가합니다.
      <br></br>이 점 양해부탁드립니다.
    </div>
  );
}

function BusText() {
  return (
    <div className="btcont">
      <div className="btbox">
        <div className="bus jisun">지선</div>
        <span>금남57 양산60 용전85 용전84</span>
      </div>
      <div className="btbox">
        <div className="bus maeul">마을</div>
        <span>마을700</span>
      </div>
      <div>건국지구대 하차 후 도보 3분</div>
    </div>
  );
}
