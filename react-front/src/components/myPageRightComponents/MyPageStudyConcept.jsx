import Board from "../Board";
const MyPageStudyConcept = (props) => {
  return (
    <div
      style={{
        width: "50%",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      <h3>내가 학습한 개념</h3>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageStudyConcept;
