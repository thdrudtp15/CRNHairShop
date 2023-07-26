import { useNavigate } from "react-router-dom";
import "../../css/MainPage/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  let [navbarOpen, setNavbarOpen] = useState("");
  let [ABOUT, setABOUT] = useState("ABOUT");
  let [PRICE, setPRICE] = useState("PRICE");
  let [RESERVE, setRESERCE] = useState("RESERVE");
  let [NOTICE, setNOTICE] = useState("NOTICE");

  useEffect(() => {
    let resizeEvent = function () {
      if (this.innerWidth > 996) {
        setNavbarOpen("");
      }
    };

    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  const navbarControl = () => {
    if (navbarOpen === "") {
      setNavbarOpen("Navbar-hidden-open");
    } else {
      setNavbarOpen("");
    }
  };

  return (
    <div>
      {navbarOpen === "Navbar-hidden-open" && (
        <div className="screenBlack"></div>
      )}
      <div className="Navbar-wrap">
        <div
          className="Navbar-logo"
          onClick={() => {
            navigate("/p");
          }}
        >
          <span>채리니</span>헤어샵
        </div>
        {/*홈페이지 너비를 줄였을 때 */}
        <div className="Navbar-hidden">
          <div
            onClick={() => {
              navbarControl();
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className={`Navbar-hidden-close ${navbarOpen}`}>
          <div className="Navbar-hidden-list">
            <NavLinkMSize
              nav="ABOUT"
              navigate={navigate}
              text={ABOUT}
              setter={setABOUT}
              ctext="소개"
            />
            <NavLinkMSize
              nav="PRICE"
              navigate={navigate}
              text={PRICE}
              setter={setPRICE}
              ctext="가격"
            />
            <NavLinkMSize
              nav="RESERVE"
              navigate={navigate}
              text={RESERVE}
              setter={setRESERCE}
              ctext="예약"
            />
            <NavLinkMSize
              nav="NOTICE"
              navigate={navigate}
              text={NOTICE}
              setter={setNOTICE}
              ctext="공지"
            />
          </div>
        </div>
        {/*홈페이지 너비가 정상 너비일 때 */}
        <div className="Navbar-category-wrap">
          <div className="Navbar-categorybox">
            <NavLinkLSize text="ABOUT" navigate={navigate} nav="about/about" />
            <NavLinkLSize text="PRICE" navigate={navigate} nav="price/price" />
            <NavLinkLSize
              text="RESERVE"
              navigate={navigate}
              nav="reserve/reservation"
            />
            <NavLinkLSize
              text="NOTICE"
              navigate={navigate}
              nav="notice/notice"
            />
            <NavLinkLSize
              text="GELLARY"
              navigate={navigate}
              nav="gellary/gellary"
            />
          </div>
        </div>
      </div>
      {/* <div style={{ height: 91 }}></div> */}
    </div>
  );
};

export default Navbar;

const NavLinkMSize = ({ nav, navigate, text, setter, ctext }) => {
  return (
    <div className="Navbar-hidden-btn">
      <div
        className="Navbar-hidden-btn-inner"
        onMouseOver={() => {
          setter(ctext);
        }}
        onMouseLeave={() => {
          setter(nav);
        }}
        onClick={() => {
          navigate(`/${nav}`);
        }}
      >
        {text}
      </div>
    </div>
  );
};

const NavLinkLSize = ({ nav, navigate, text }) => {
  return (
    <div
      className="Navbar-category"
      onClick={() => {
        navigate(`/${nav}`);
      }}
    >
      <div>{text}</div>
    </div>
  );
};
