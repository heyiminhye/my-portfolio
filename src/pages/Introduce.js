import React from "react";
import Fade from "react-reveal/Fade";

function Introduce() {
  return (
    <div className="wrapper introduce" id="introduce">
      <div className="section_title">
        <h1>소개</h1>
        <hr className="title_under_line" />
        {/* <p className="sub_title">
          다양한 문제와 오류 상황들에 적절히 대처할 줄 아는
          <br />
          문제 해결에 열정을 가진 적극적인 개발자가 되겠습니다.
        </p> */}
      </div>

      <Fade bottom cascade>
        <div className="introduce_wrapper_bottom">
          <div className="selfie">
            <img src="./assets/selfie.jpg" alt="" />
          </div>
          <div className="introduce_contents">
            <div className="introduce_contents_box">
              <div>
                이름 : 강인혜
                <br />
                나이 : 만 27세 (1995.01.24)
              </div>
              <div>
                어릴 적부터 책 읽기를 좋아하여 글에 대한 이해도가 높고
                타국어에도 관심이 많아 Languge Exchange 모임과 영어과외를 통해
                일상영어회화를 배우고 있습니다.
              </div>
              <div>
                무한한 호기심과 배움의 열정을 발판으로 개발 분야에 도전하여
                끈기있게 성장해나가고 있으며, 쉽고 쾌적한 사용성과 기술 발전에
                기여하고 솔루션을 제시할 수 있는 프론트엔드 개발자를 꿈꿉니다.
              </div>
              <div>
                현재 JavaScript와 프레임워크 React.js 기술 습득에 집중하고
                있습니다.
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Introduce;
