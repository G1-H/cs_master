import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Home = (props) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div id="index-page-title">
        <div>
          간단한 테스트를 통해 CS 능력을 체크해보고, <br />
          모자란 개념은 찾아서 익혀보세요.
        </div>
      </div>
      <div>
        <Button variant="primary" size="lg">
          테스트하고 회원가입 하러 가기
        </Button>
        <Button variant="primary" size="lg" onClick={handleLoginClick}>
          이미 회원이에요.
          <br />
          <div className="sub-title">로그인하러 가기</div>
        </Button>
      </div>
    </div>
    //인덱스 페이지도 로그인 여부에 따라 두가지로.
  );
};

export default Home;
