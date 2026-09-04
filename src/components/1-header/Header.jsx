import { useEffect, useState } from "react";
import style from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [moode, setMoode] = useState(
    localStorage.getItem("caruntmoode") ?? "dark"
  );
  useEffect(() => {
    document.body.className = moode;
  }, [moode]);
  const changeMoode = () => {
    localStorage.setItem("caruntmoode", moode === "dark" ? "light" : "dark");
    setMoode(localStorage.getItem("caruntmoode"));
  };
  return (
    <header>
      <button className={style.bar} onClick={() => setShowPopup(true)}>
        <MenuIcon style={{ marginTop: "4px" }} />
      </button>
      <div />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Siklls">Siklls</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button>
        {moode === "dark" ? (
          <span className={style.moon} onClick={() => changeMoode()}>
            <BedtimeOutlinedIcon style={{ margin: "4px 0px 4px 2px" }} />
          </span>
        ) : (
          <span className={style.moon} onClick={() => changeMoode()}>
            <LightModeIcon style={{ marginTop: "4px" }} />
          </span>
        )}
      </button>
      {showPopup && (
        <div className={style.popup}>
          <div className={style.model}>
            <button className={style.close} onClick={() => setShowPopup(false)}>
              <CloseIcon style={{ marginTop: "4px" }} />
            </button>
            <ul>
              <li>
                <a href="#" onClick={() => setShowPopup(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Siklls">Siklls</a>
              </li>
              <li>
                <a href="#Project">Project</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
