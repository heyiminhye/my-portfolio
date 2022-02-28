import React from "react";
import Zoom from "react-reveal/Zoom";

function Skills() {
  return (
    <div className="wrapper skills" id="skills">
      <div className="section_title skills_title">
        <h1>기술스택</h1>
        <hr className="title_under_line skills_under_line" />
      </div>
      <Zoom>
        <div className="skills_group">
          <img src="./assets/icons/css.png" alt="" />
          <img src="./assets/icons/html.png" alt="" />
          <img src="./assets/icons/js.png" alt="" />
          <img src="./assets/icons/react.png" alt="" />
          {/* <img src="./assets/icons/flutter.png" alt="" /> */}
          <img src="./assets/icons/git.png" alt="" />
          {/* <img src="./assets/icons/node.png" alt="" /> */}
        </div>
      </Zoom>
    </div>
  );
}

export default Skills;
