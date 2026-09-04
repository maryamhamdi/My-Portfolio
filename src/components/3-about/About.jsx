import style from "./About.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function About() {
  return (
    <div className={style.about} id="About">
      <div className={style.title}>
        <h1>
          About<span>Me</span>
        </h1>
      </div>
      <div className={style.data}>
        <div className={style.image}>
          <img src="/img/WhatsApp Image 2025-09-23 at 12.11.20_fdb25f21.jpg" />
        </div>
        <div className={style.text}>
          <p>
     
I’m a passionate Front-End Developer specializing in React.js and Next.js, and a recent Computer Science graduate from October 6 University. I enjoy turning ideas into responsive, interactive, and user-focused digital experiences through clean code and thoughtful design.
Through my internships and projects, I have gained hands-on experience building complete web applications, integrating REST APIs, managing application state with Redux Toolkit, and implementing authentication flows. My featured projects include DermaMind, an AI-powered skin analysis and e-commerce platform, FreshCart, a full-featured e-commerce application, and Recipes, a recipe discovery platform integrated with the YouTube API.
I work with JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap, React Hook Form, Zod, Redux Toolkit, and Framer Motion. I focus on creating scalable interfaces, improving performance, handling real-world API challenges, and delivering smooth user experiences across different devices.

           <br>
         </br>
             <br></br>
              <br></br>
     What I enjoy most about front-end development is transforming complex ideas into simple, accessible, and visually engaging interfaces. I’m eager to continue growing as a developer, solve meaningful problems, collaborate with creative teams, and contribute to projects that bring valuable digital experiences to life.
          </p>
        </div>
        <div></div>
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
  );
}

export default About;
