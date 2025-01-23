import Button from "react-bootstrap/esm/Button";
const ButtonPack = (props) => {
  return (
    <div>
      <Button variant="primary" size="lg">
        테스트하고 회원가입 하러 가기
      </Button>
      <Button variant="primary" size="lg">
        이미 회원이에요.
        <br />
        <div class="sub-title">로그인하러 가기</div>
      </Button>
    </div>
  );
};

export default ButtonPack;
