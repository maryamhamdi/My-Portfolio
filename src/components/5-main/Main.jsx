import { Col, Row } from "react-bootstrap";
import style from "./Main.module.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { allProjects } from "../allProjects";

function Main() {
  const [classActive, setClassActive] = useState("all");
  const [filterProject, setFilterProject] = useState(allProjects);
  const buttonClick = (categoreN) => {
    setClassActive(categoreN);
    const newData = allProjects.filter((e) => {
      const copy = e.categore.filter((cate) => {
        return cate === categoreN;
      });
      return copy[0] === categoreN;
    });
    setFilterProject(newData);
  };
  return (
    <div className={style.main} id="Project">
      <div className={style.title}>
        <h1>
          My<span>Project</span>
        </h1>
      </div>
      <Row className={style.row}>
        <Col className={style.left}>
          <button
            className={classActive === "all" ? style.active : null}
            onClick={() => {
              setClassActive("all");
              setFilterProject(allProjects);
            }}
          >
            All Project
          </button>
          <div>
            <button
              onClick={() => buttonClick("css")}
              className={classActive === "css" ? style.active : null}
            >
              HTML&CSS
            </button>
            <button
              onClick={() => buttonClick("bootstrap")}
              className={classActive === "bootstrap" ? style.active : null}
            >
              Bootstrap
            </button>
            <button
              className={classActive === "js" ? style.active : null}
              onClick={() => buttonClick("js")}
            >
              JavaScript
            </button>
            <button
              className={classActive === "react" ? style.active : null}
              onClick={() => buttonClick("react")}
            >
              React
            </button>
          </div>
        </Col>
        <Col className={style.right}>
          {filterProject.map((e) => {
            return (
              <article key={e.id} className={style.card}>
                <img src={e.image} alt="image" />
                <div className={style.box}>
                  <h1>{e.title}</h1>
                  <p>{e.desc}</p>
                  <div className={style.link}>
                    <a href={e.link} title="visit website">
                      <FaLink />
                    </a>
                    <a href={e.github} title="go to repo">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default Main;
