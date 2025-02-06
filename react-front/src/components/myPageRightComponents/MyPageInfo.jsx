import { Form, InputGroup, Image, Button } from "react-bootstrap";

const MyPageInfo = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          minWidth: "150px",
          marginTop: "30px",
          padding: "30px",
        }}
      >
        <Image
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19491bd05ab%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19491bd05ab%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.92578125%22%20y%3D%2294.5%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          roundedCircle
        />
      </div>
      <div style={{ minWidth: "200px", marginTop: "30px", padding: "30px" }}>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">이메일</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">비밀번호</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon3"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>학습 정도</InputGroup.Text>
            <Form.Select aria-label="studyPeriod select">
              <option>학습 정도를 선택해주세요.</option>
              <option value="1">1개월</option>
              <option value="2">2개월</option>
              <option value="3">3개월</option>
              <option value="4">4개월</option>
              <option value="5">5개월</option>
              <option value="6">6개월</option>
              <option value="7">7개월</option>
              <option value="8">8개월</option>
              <option value="9">9개월</option>
              <option value="10">10개월</option>
              <option value="11">11개월</option>
              <option value="12">1년 이상</option>
            </Form.Select>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>선호 분야</InputGroup.Text>
            <Form.Select aria-label="position select">
              <option>선호 분야를 선택해주세요.</option>
              <option value="backend">백엔드</option>
              <option value="frontend">프론트</option>
              <option value="devops">dev-ops</option>
            </Form.Select>
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MyPageInfo;
