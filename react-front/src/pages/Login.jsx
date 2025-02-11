import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
  outForm: {
    marginTop: "10vh",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerForm: {
    width: "20rem",
  },
  btnDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Login = (props) => {
  const { onClickLogin } = props;
  const onClickKakaoLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/kakao", {
        method: "GET",
        credentials: "include", // 쿠키를 포함해야 할 경우 추가
      });

      if (!response.ok) {
        throw new Error("카카오 로그인 요청 실패");
      }

      const data = await response.json();
      console.log("카카오 로그인 성공:", data);
      // 로그인 후 처리 (예: 페이지 이동)
      window.location.href = data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container">
      <div style={styles.btnDiv}>
        <Form style={styles.outForm}>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={styles.innerForm}
          >
            <Form.Control type="email" placeholder="이메일" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlPassword1"
            style={styles.innerForm}
          >
            <Form.Control type="password" placeholder="비밀번호" />
          </Form.Group>
        </Form>
        <Button
          variant="primary"
          size="lg"
          style={{
            backgroundColor: "#0A99FF",
            borderColor: "#0A99FF",
            color: "white",
            width: "10rem",
            height: "3rem",
          }}
          as={Link}
          to="/mypage"
          onClick={onClickLogin}
        >
          일반 로그인
        </Button>
        <Button
          variant="primary"
          size="lg"
          style={{
            backgroundColor: "#02C75A",
            borderColor: "#02C75A",
            color: "white",
            width: "10rem",
            height: "3rem",
          }}
        >
          네이버 로그인
        </Button>
        <Button
          variant="primary"
          size="lg"
          style={{
            backgroundColor: "#FAE100",
            borderColor: "#FAE100",
            color: "black",
            width: "10rem",
            height: "3rem",
          }}
          onClick={onClickKakaoLogin}
        >
          카카오 로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
