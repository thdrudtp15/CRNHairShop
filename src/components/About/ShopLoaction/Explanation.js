import "../../../css/About/Explanation.css";
import { TfiLocationPin } from "react-icons/tfi";
function Explanation() {
  return (
    <div className="explanation-wrap">
      <div className="explanation-icon">
        <TfiLocationPin />
      </div>
      <div className="explanation-text">
        <div>
          <div>광주 광역시 북구 용두마을길 13 채리니헤어샵</div>
          <div>TEL : 032-2324-2323</div>
          <div>PHONE : 010-2325-2343</div>
        </div>
      </div>
    </div>
  );
}
export default Explanation;
