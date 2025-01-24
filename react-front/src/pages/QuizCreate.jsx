import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const QuizCreate = () => {
  const location = useLocation();
  const { detail: initialDetail, title } = location.state || {
    detail: "내용 없음",
    title: "제목 없음",
  };
  const [detail, setDetail] = useState(initialDetail);
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  return (
    <div className="main-container-row">
      <div
        className="quiz-create-left"
        style={{
          marginTop: "30px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>퀴즈 생성방법</h4>
        <div style={{ width: "20vw" }}>
          존 CS 개념 본문에서 공백 퀴즈를 만들 부분을 "(_blank)" 로 바꾸어 저장
          해주세요.
          <hr />
          예시. (본문) 새콤달콤은 딸기 맛이 진리다.
          <hr />
          (퀴즈 생성) 새콤달콤은 (_blank) 맛이 진리다.
          <hr />
          (힌트 입력) 힌트는 해당 문제에 대한 힌트로 제공됩니다.
        </div>
      </div>
      <div
        className="quiz-create-right"
        style={{
          marginTop: "30px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>퀴즈를 만들어주세요</h4>
        <h4>{title}</h4>
        <Form style={{ width: "40vw" }}>
          <InputGroup className="mb-3">
            <InputGroup.Text>상세설명</InputGroup.Text>

            <Form.Control
              as="textarea"
              rows={10}
              placeholder="상세 설명을 입력해주세요."
              aria-label="detail"
              aria-describedby="basic-addon2"
              value={detail}
              onChange={handleDetailChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>힌트 입력</InputGroup.Text>

            <Form.Control
              as="textarea"
              rows={10}
              placeholder="힌트를 입력해주세요."
              aria-label="hint"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default QuizCreate;
