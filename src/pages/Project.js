import React from "react";
import ProjectList from "../components/ProjectList";

function Project() {
  return (
    <div className="wrapper project" id="project">
      <div className="section_title">
        <h1>프로젝트</h1>
        <hr className="title_under_line" />
      </div>
      <div className="project_container">
        <ProjectList
          title="이모션 다이어리"
          description="하루의 감정을 5가지 표정 중에서 선택하고 일기와 함께 기록할 수 있는 감정 일기장입니다. 최신순, 오래된 순, 좋은 감정, 안 좋은 감정 등을 필터링 해서 볼 수 있고 새 일기 쓰기, 기존 일기 수정, 일기 삭제 기능이 있습니다."
          backgroundImg="./assets/images/diary.png"
          demo="https://heyiminhye.github.io/emotion-diary/"
          code="https://github.com/heyiminhye/emotion-diary"
          title2="키퍼(메모앱)"
          description2="리액트의 useState, props를 활용하여 심플한 메모 앱을 제작하였습니다."
          backgroundImg2="./assets/images/keeper.png"
          demo2="https://heyiminhye.github.io/keeper/"
          code2="https://github.com/heyiminhye/keeper"
        />
        <ProjectList
          title="투두리스트"
          description="자바스크립트 문법과 리액트의 useState를 활용하여 하루의 할 일을 간단히 메모할 수 있는 투두리스트 앱을 제작하였습니다."
          backgroundImg="./assets/images/todo.png"
          demo="https://heyiminhye.github.io/todo-list/"
          code="https://github.com/heyiminhye/todo-list"
          title2="테슬라"
          description2="실제 테슬라 홈페이지를 따라 React로 제작한 클론 페이지입니다. Redux와 Styled-components를 활용하여 제작하였고 모바일 환경에서 반응형 디자인을 지원합니다."
          backgroundImg2="./assets/images/tesla-clone.png"
          demo2="https://heyiminhye.github.io/tesla-clone/"
          code2="https://github.com/heyiminhye/tesla-clone"
        />
        <ProjectList
          title="틴독"
          description="데이팅 앱 틴더를 모티브로 한 틴독 홈페이지입니다. HTML, CSS, Bootstrap으로 제작하였고 모바일 환경에서 반응형 디자인을 지원합니다."
          backgroundImg="./assets/images/tindog.png"
          demo="https://heyiminhye.github.io/tindog/"
          code="https://github.com/heyiminhye/tindog"
          title2="강인혜 포트폴리오"
          description2="기획부터 배포까지 스스로 완성한 프로젝트입니다. Figma를 이용하여 디자인하였고 이후 개발, 배포까지 5일이 소요되었습니다. 셀렉터 과용을 줄이고자 SCSS를 사용하였고 미디어쿼리를 이용해 모바일 환경에서의 사용성도 함께 고려하였습니다. 코드의 효율과 React.js 활용도를 높이기 위해 계속해서 공부하고 리팩토링할 예정입니다."
          backgroundImg2="./assets/images/portfolio.png"
          demo2="https://www.kanginhye.kr/"
          code2="https://github.com/heyiminhye/new-portfolio"
        />
      </div>
    </div>
  );
}

export default Project;
