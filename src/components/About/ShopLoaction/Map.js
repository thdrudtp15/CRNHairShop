import { useEffect } from "react";
import "../../../css/About/Map.css";
const { kakao } = window;
function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.21905365170078, 126.87755511025372),
      level: 3,
      draggable: false,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      35.21905365170078,
      126.87755511025372
    );
    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition,
    });
    var content = `<div class="map-overlay">광주 북구 용두마을길 13</div>`;
    var overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
    marker.setMap(map);

    function zoomIn() {
      map.setLevel(map.getLevel() - 1);
    }
    function zoomOut() {
      map.setLevel(map.getLevel() + 1);
    }

    document.getElementById("zoomIn").addEventListener("click", zoomIn);
    document.getElementById("zoomOut").addEventListener("click", zoomOut);
  }, []);
  return (
    <div class="map_wrap">
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
      <div class="custom_zoomcontrol radius_border">
        <span id="zoomIn">
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
          />
        </span>
        <span id="zoomOut">
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
          />
        </span>
      </div>
    </div>
  );
}

export default Map;
