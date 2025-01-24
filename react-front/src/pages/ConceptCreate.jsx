import { InputGroup, Form, Button } from "react-bootstrap";
const ConceptCreate = () => {
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
        <div>
          <h3>개념을 만들어주세요.</h3>
        </div>
        <div style={{ width: "80%" }}>
          <Form style={{ width: "80%" }}>
            <InputGroup className="mb-3">
              <InputGroup.Text>개념 분류</InputGroup.Text>
              <Form.Select aria-label="category select">
                <option>개념을 선택해주세요.</option>
                <option value="network">네트워크</option>
                <option value="data-tree">자료구조</option>
                <option value="os">운영체제</option>
                <option value="database">데이터베이스</option>
                <option value="java">자바</option>
                <option value="js">자바스크립트</option>
                <option value="it-commons">IT 상식</option>
                <option value="web">웹개발</option>
              </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>개념</InputGroup.Text>
              <Form.Control
                placeholder="개념명"
                aria-label="title"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>상세설명</InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="상세 설명을 입력해주세요."
                aria-label="detail"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>

            <InputGroup className="mb-3">
              <InputGroup.Text>작성자</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="G1"
                aria-label="author"
                disabled
                readOnly
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
    </div>
  );
};

export default ConceptCreate;
