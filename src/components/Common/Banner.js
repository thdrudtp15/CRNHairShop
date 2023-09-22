import "../../css/Common/Banner.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Banner({ img, arr, tool, text, setTool }) {
  useEffect(() => {
    const t = document.querySelectorAll(".subCatg-btn");

    if (t instanceof NodeList) {
      for (let i = 0; i < t.length; i++) {
        if (i === tool) {
          t[i].classList.add("selectTool");
        } else {
          t[i].classList.remove("selectTool");
        }
      }
    }
  }, [tool]);

  return (
    <div className="Banner-wrap">
      <div className="Banner-img" style={{ background: `url(${img})` }}>
        <div className="Banner-text">{text}</div>
      </div>
      <div className="Banner-info">
        {arr.map((a, i) => (
          <div
            key={i}
            className="subCatg-btn"
            onClick={() => {
              setTool(i);
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
