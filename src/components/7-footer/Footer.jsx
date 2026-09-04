import style from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <footer>
      <Row className={style.footer}>
        <Col>
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
              <a
                href="https://www.instagram.com/marym_hamdi670/"
                target="_blank"
              >
                <InstagramIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a href="https://wa.me/201002564232" target="_blank">
                <WhatsAppIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/maryam-hamdy-232763262"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a href="https://github.com/maryamhamdi" target="_blank">
                <GitHubIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
          </div>
        </Col>
        <Col>
        <h5 style={{ fontSize: "16px" }} >Thank You For Visiting My Portfolio.</h5>
        </Col>
        <Col>
          <p className={style.name}>
            Developed By <span>Mariam Hamdy</span>
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
