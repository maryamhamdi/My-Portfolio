import { Col, Row } from "react-bootstrap";
import style from "./Contact.module.css";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "/public/animation/SucessDone.json";
import sendAnimation from "/public/animation/sendMessage.json";
function Contact() {
  const [state, handleSubmit] = useForm("meoqweov");
  if (state.succeeded) {
    return (
      <h1 className={style.popMessage}>
        <Lottie style={{ height: 100 }} animationData={doneAnimation} />
        Thank you, we will contact you as time as possible!
      </h1>
    );
  }
  return (
    <div className={style.contact} id="Contact">
      <Row className={style.sendUs}>
        <Col className={style.left}>
          <h1>
            Send Us a <span>Massage</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <input autoComplete="off" placeholder="Full Name" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea placeholder="Message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className={style.button}
              disabled={state.submitting}
            >
              Send Message
              <SiMinutemailer className={style.icon} />
            </button>
          </form>
        </Col>
        <Col className={style.right}>
          <Lottie
            style={{ marginTop: "-2rem" }}
            animationData={sendAnimation}
          />
        </Col>
      </Row>
      <Row className={style.contactUS}>
        <div className={style.title}>
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            If you have an idea for a website, contact me to make it a reality.
          </p>
        </div>
        <div className={style.data}>
          <div className={style.box}>
            <div>
              <FaLocationDot className={style.icon} />
            </div>
            <h1>Location</h1>
            <p>Menoufia, Egypt</p>
          </div>
          <div className={style.box}>
            <div>
              <FaPhoneAlt className={style.icon} />
            </div>
            <h1>Phone</h1>
            <p>+201002564232</p>
          </div>
          <div className={style.box}>
            <div>
              <FaRegEnvelope className={style.icon} />
            </div>
            <h1>Email</h1>
            <p>hamdymaryam874@gmail.com</p>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Contact;
