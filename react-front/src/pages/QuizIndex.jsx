import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const QuizIndex = (props) => {
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };
  return (
    <ListGroup
      style={{
        flexDirection: "column",
        gap: "5px",

        padding: "5px",
        backgroundColor: "#f5d5d5",
      }}
    >
      <ListGroup.Item
        className="quiz-list"
        onClick={() => handleClick("today")}
      >
        <strong className="d-block">오늘의 퀴즈 풀기 </strong>
        <small>하루 10문제 씩 풀어보세요.</small>
      </ListGroup.Item>
      <ListGroup.Item className="quiz-list">
        <strong className="d-block">카테고리 별로 풀기</strong>
        <small>카테고리 내 모든 문제 풀어보세요.</small>
      </ListGroup.Item>
      <ListGroup.Item className="quiz-list">
        <strong className="d-block">무작위 풀기</strong>
        <small>모든 문제 무작위로 풀어보세요.</small>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default QuizIndex;
