import { useState } from "react";
import LeftListGroup from "../components/LeftListGroup";

import { Outlet } from "react-router-dom";
const exampleContents = [
  { title: "내가 푼 문제 ex1", to: "/" },
  { title: "ex2", to: "/" },
  { title: "ex3", to: "/" },
  { title: "ex4", to: "/" },
  { title: "ex5", to: "/" },
  { title: "ex6", to: "/" },
  { title: "ex7", to: "/" },
  { title: "ex8", to: "/" },
  { title: "ex9", to: "/" },
  { title: "ex10", to: "/" },
];
const exampleContents2 = [
  { title: "제출한 퀴즈 ex1", to: "/" },
  { title: "ex2", to: "/" },
  { title: "ex3", to: "/" },
  { title: "ex4", to: "/" },
  { title: "ex5", to: "/" },
  { title: "ex6", to: "/" },
  { title: "ex7", to: "/" },
  { title: "ex8", to: "/" },
  { title: "ex9", to: "/" },
  { title: "ex10", to: "/" },
];
const exampleContents3 = [
  { title: "북마크 개념 ex1", to: "/" },
  { title: "ex2", to: "/" },
  { title: "ex3", to: "/" },
  { title: "ex4", to: "/" },
  { title: "ex5", to: "/" },
  { title: "ex6", to: "/" },
  { title: "ex7", to: "/" },
  { title: "ex8", to: "/" },
  { title: "ex9", to: "/" },
  { title: "ex10", to: "/" },
];
const MyPage = (props) => {
  const [contents, setContents] = useState([]);
  const items = [
    { title: "상세정보", to: "/mypage/info" },
    { title: "CS 등급", to: "/mypage/grade" },
    { title: "내가 푼 문제", to: "/mypage/submit-quiz" },
    { title: "내가 학습한 개념", to: "/mypage/study-concept" },
    { title: "북마크 개념", to: "/mypage/bookmark-concept" },
  ];

  const styles = {
    listGroupItem: {
      width: "20vw",
    },
  };
  const setSelectedContent = (index) => {
    switch (index) {
      case 2:
        setContents(exampleContents);
        break;
      case 3:
        setContents(exampleContents2);
        break;
      case 4:
        setContents(exampleContents3);
        break;
      default:
        setContents([]);
    }
  };
  return (
    <div className="main-container-row">
      <div style={{ width: "20vw", marginTop: "30px", padding: "30px" }}>
        <LeftListGroup
          items={items}
          styles={styles}
          onSelect={setSelectedContent}
        ></LeftListGroup>
      </div>
      <Outlet context={{ contents, styles }}></Outlet>
    </div>
  );
};

export default MyPage;
