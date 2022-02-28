import React from "react";
import { Call, MailOutline, LocationOnOutlined } from "@material-ui/icons";

function Contact() {
  const year = new Date().getFullYear();

  return (
    <div className="wrapper contact" id="contact">
      <div className="section_title contact_title">
        <h1>연락처</h1>
        <hr className="title_under_line contact_under_line" />
      </div>
      <div className="contact_container">
        <div className="contact_card">
          <div className="contact_detail">
            <LocationOnOutlined className="icon" />
            <h3>주소지</h3>
            서울시 구로구 디지털로
          </div>

          <div className="contact_detail">
            <MailOutline className="icon" />
            <h3>이메일</h3>
            heyiminhye@gmail.com
          </div>
        </div>
      </div>

      <footer>
        <div>
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
        <hr className="footer_under_line" />© {year}. KANG IN HYE all rights
        reserved.
        <br />본 사이트는 포트폴리오 용도로 제작되었으며, 상업적인 목적이 없음을
        밝힙니다.
      </footer>
    </div>
  );
}

export default Contact;
