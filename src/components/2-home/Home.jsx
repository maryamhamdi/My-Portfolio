import style from "./Home.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Lottie from "lottie-react";
import develper from "/public/animation/developer.json";
function Home() {
  return (
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.image}>
          <img src="/img/WhatsApp Image 2025-09-23 at 12.11.20_fdb25f21.jpg" alt="imge" />
          {/* <span>
            <VerifiedIcon />
          </span> */}
        </div>
        <div className={style.text}>
          <h1>Mariam Hamdy</h1>
          <h2>I'm </h2>
        </div>
        <div className={style.icon}>
          <div>
            <a
              href="https://www.facebook.com/marym.hamdi.96"
              target="_blank"
            >
              <FacebookIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/marym_hamdi670/" target="_blank">
              <InstagramIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://wa.me/201002564232 " target="_blank">
              <WhatsAppIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/maryam-hamdy-232763262" target="_blank">
              <LinkedInIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/maryamhamdi " target="_blank">
              <GitHubIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
        </div>
        <div className={style.cv}>
          <a
            href="/pdf/CV.pdf"
            download="CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div> Download Cv</div>
            <div className={style.download}>
              <CloudDownloadIcon />
            </div>
          </a>
        </div>
      </div>
      <div className={style.right}>
        <Lottie animationData={develper} />
      </div>
    </div>
  );
}

export default Home;
