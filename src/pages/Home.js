import React from "react";
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home_left_wrapper">
        <div className="greetings_group">
          <p className="greetings_top">
            안녕하세요,
            <br />
            프론트엔드 개발자
            <br />
            강인혜입니다.
          </p>
          <hr className="greetings_under_line" />
          <p className="greetings_bottom">방문해 주셔서 감사합니다.</p>
          <div className="link_group">
            <a href="강인혜.pdf" download="">
              <button className="download_pdf">
                <FiDownload /> 이력서.pdf
              </button>
            </a>

            <a
              href="https://github.com/heyiminhye/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github" src="../assets/icons/github.png" alt="" />
            </a>
            <a
              href="https://velog.io/@heyiminhye"
              target="_blank"
              rel="noreferrer"
            >
              <img className="velog" src="../assets/icons/velog.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="home_right_wrapper">
        <img className="mimoticon" src="./assets/mimoticon.png" alt="" />
      </div>
      <div className="arrow">
        <img className="animateDown" src="./assets/icons/arrow.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
