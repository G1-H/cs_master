import Board from "../Board";

const MyPageSubmitQuiz = (props) => {
  return (
    <div>
      <h4>내가 푼 문제</h4>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageSubmitQuiz;
