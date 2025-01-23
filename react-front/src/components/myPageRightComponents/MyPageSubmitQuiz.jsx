import Board from "../Board";

const MyPageSubmitQuiz = (props) => {
  return (
    <div
      style={{
        width: "50%",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      <h3>내가 푼 문제</h3>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageSubmitQuiz;
