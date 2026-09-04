import style from "./Siklls.module.css";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiMui,
  SiPostman,
  SiReactrouter,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function Siklls() {
  return (
    <div className={style.sikll} id="Siklls">
      <div className={style.title}>
        <h1>
          My<span>Siklls</span>
        </h1>
      </div>
      <div className={style.data}>
        <div className={style.element}>
          <div>
            <FaHtml5 className={style.icon} />
          </div>
          <h3>HTML</h3>
        </div>
        <div className={style.element}>
          <div>
            <IoLogoCss3 className={style.icon} />
          </div>
          <h3>CSS</h3>
        </div>
        <div className={style.element}>
          <div>
            <FaBootstrap className={style.icon} />
          </div>
          <h3>Bootstrap</h3>
        </div>
        <div className={style.element}>
          <div>
            <IoLogoJavascript className={style.icon} />
          </div>
          <h3>JavaScript</h3>
        </div>
        <div className={style.element}>
          <div>
            <FaReact className={style.icon} />
          </div>
          <h3>React</h3>
        </div>
        <div className={style.element}>
          <div>
            <SiReactrouter className={style.icon} />
          </div>
          <h3>React Router</h3>
        </div>
        <div className={style.element}>
          <div>
            <TbBrandRedux className={style.icon} />
          </div>
          <h3>Redux</h3>
        </div>
        <div className={style.element}>
          <div>
            <SiMui className={style.icon} />
          </div>
          <h3>Material-UI</h3>
        </div>
        <div className={style.element}>
          <div>
            <FaGitAlt className={style.icon} />
          </div>
          <h3>Git</h3>
        </div>
        <div className={style.element}>
          <div>
            <FaGithub className={style.icon} />
          </div>
          <h3>Github</h3>
        </div>
        <div className={style.element}>
          <div>
            <SiPostman className={style.icon} />
          </div>
          <h3>PostMan</h3>
        </div>
      <div className={style.element}>
  <div>
    <SiNextdotjs className={style.icon} />
  </div>
  <h3>Next.js</h3>
</div>

      </div>
    </div>
  );
}

export default Siklls;
