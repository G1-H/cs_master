import LeftListGroup from "../components/LeftListGroup";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Learning = (props) => {
  const items = [
    { title: "네트워크", to: "/learning/network" },
    { title: "자료구조", to: "/learning/data-tree" },
    { title: "운영체제", to: "/learning/os" },
    { title: "데이터베이스", to: "/learning/database" },
    { title: "자바", to: "/learning/java" },
    { title: "스프링", to: "/learning/spring" },
    { title: "자바스크립트", to: "/learning/js" },
    { title: "IT 상식", to: "/learning/it-commons" },
    { title: "웹개발", to: "/learning/web" },
  ];

  const [contents, setContents] = useState([]);
  const styles = {
    listGroupItem: {
      width: "20vw",
    },
    contentList: {
      width: "40vw",
    },
  };
  const category = {
    0: [
      {
        category: "network",
        id: 0,
        title: " 네트워크 ex1",
        img: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19491bd05ab%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19491bd05ab%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.92578125%22%20y%3D%2294.5%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        detail:
          "이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러이러쿵저러쿵",
        author: "지원",
        likes: 3,
      },
      { category: "network", title: " 네트워크 ex3" },
      { category: "network", title: " 네트워크 ex2" },
      { category: "network", title: " 네트워크 ex4" },
      { category: "network", title: " 네트워크 ex5" },
      { category: "network", title: " 네트워크 ex6" },
      { category: "network", title: " 네트워크 ex7" },
      { category: "network", title: " 네트워크 ex8" },
      { category: "network", title: " 네트워크 ex9" },
      { category: "network", title: " 네트워크 ex10" },
    ],
    1: [
      { category: "data-tree", title: " 자료 구조 ex1" },
      { category: "data-tree", title: " 자료 구조 ex2" },
      {
        category: "data-tree",
        title: " 자료 구조 ex3",
      },
      { category: "data-tree", title: " 자료 구조 ex4" },
      { category: "data-tree", title: " 자료 구조 ex5" },
      { category: "data-tree", title: " 자료 구조 ex6" },
      { category: "data-tree", title: " 자료 구조 ex7" },
      { category: "data-tree", title: " 자료 구조 ex8" },
      { category: "data-tree", title: " 자료 구조 ex9" },
      { category: "data-tree", title: " 자료 구조 ex10" },
    ],
    2: [
      { category: "os", title: "운영체제 ex1" },
      { category: "os", title: "운영체제 ex2" },
      { category: "os", title: "운영체제 ex3" },
      { category: "os", title: "운영체제 ex4" },
      { category: "os", title: "운영체제 ex5" },
      { category: "os", title: "운영체제 ex6" },
      { category: "os", title: "운영체제 ex7" },
      { category: "os", title: "운영체제 ex8" },
      { category: "os", title: "운영체제 ex9" },
      { category: "os", title: "운영체제 ex10" },
    ],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  };
  const setSelectedContent = (index) => {
    setContents(category[index]);
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
      <div style={{ width: "50%", marginTop: "30px", padding: "30px" }}>
        <Outlet context={{ contents, styles }}></Outlet>
      </div>
    </div>
  );
};

export default Learning;
