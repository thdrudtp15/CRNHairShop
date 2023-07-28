import { useEffect } from "react";
import Map from "./Map";
import Explanation from "./Explanation";
import "../../../css/About/LocationCommon.css";

const ShopLocation = () => {
  return (
    <div className="location-wrap">
      <div className="location-title">오시는길</div>
      <Map />
      <Explanation />
    </div>
  );
};

export default ShopLocation;
