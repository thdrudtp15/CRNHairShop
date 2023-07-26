import "../../css/Reserve/Banner.css";
import { useNavigate } from "react-router-dom";

function Banner({ img, arr }) {
  console.log(arr);
  const navigate = useNavigate();
  return (
    <div className="Banner-wrap">
      <div className="Banner-img"></div>
      <div className="Banner-info">
        {arr.map((a, i) => (
          <div
            key={i}
            className="subCatg-btn"
            onClick={() => {
              navigate(`/${a.path}`);
            }}
          >
            {a.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
