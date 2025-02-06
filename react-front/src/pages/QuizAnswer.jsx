import { Button, Form, InputGroup } from "react-bootstrap";
const QuizAnswer = (props) => {
  return (
    <div className="main-container">
      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form style={{ width: "40vw" }}>
          <InputGroup className="mb-3">
            <InputGroup.Text>퀴즈</InputGroup.Text>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="상세 설명을 입력해주세요."
              aria-label="detail"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>힌트</InputGroup.Text>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="힌트 어쩌구 저쩌구"
              aria-label="hint"
              aria-describedby="basic-addon2"
              disabled
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

export default QuizAnswer;
