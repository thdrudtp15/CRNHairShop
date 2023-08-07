import "../../css/Reserve/Banner.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Banner({ img, arr, param, text }) {
  const navigate = useNavigate();
  useEffect(() => {
    const t = document.querySelectorAll(".subCatg-btn");
    t.forEach((a) => {
      a.classList.remove("selectTool");
    });
    const a = document.querySelector(`#${param}`);
    a.classList.add("selectTool");
  }, [param]);

  return (
    <div className="Banner-wrap">
      <div className="Banner-img">
        <div className="Banner-text">{text}</div>
        <img src={img} alt="" />
      </div>
      <div className="Banner-info">
        {arr.map((a, i) => (
          <div
            id={a.id}
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
