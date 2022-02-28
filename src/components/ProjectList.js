import React from "react";
import Fade from "react-reveal/Fade";

function ProjectList({
  backgroundImg,
  title,
  description,
  demo,
  code,
  backgroundImg2,
  title2,
  description2,
  demo2,
  code2,
}) {
  return (
    <div>
      <Fade right>
        <div className="project_card">
          <div className="project_img">
            <img src={backgroundImg} alt="" />
          </div>
          <div className="project_text_group">
            <div className="project_text">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <div className="project_link">
              <a className="link" href={demo} target="_blank" rel="noreferrer">
                DEMO
              </a>
              <a className="link" href={code} target="_blank" rel="noreferrer">
                CODE
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="project_card" id="project_card2">
          <div className="project_text_group" id="project_text_group2">
            <div className="project_text">
              <h4>{title2}</h4>
              <p>{description2}</p>
            </div>
            <div className="project_link">
              <a className="link" href={demo2} target="_blank" rel="noreferrer">
                DEMO
              </a>
              <a className="link" href={code2} target="_blank" rel="noreferrer">
                CODE
              </a>
            </div>
          </div>
          <div className="project_img">
            <img src={backgroundImg2} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectList;
