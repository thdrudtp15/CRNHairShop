import { useEffect } from "react";
import Map from "./Map";
import Explanation from "./Explanation";
import Transport from "./Transport";
import "../../../css/About/LocationCommon.css";

const ShopLocation = () => {
  return (
    <div className="location-wrap">
      <div className="location-title">CONTECT</div>
      <Map />
      <Explanation />
      <Transport />
    </div>
  );
};

export default ShopLocation;
