import Board from "../Board";
const MyPageStudyConcept = (props) => {
  return (
    <div>
      <h4>내가 학습한 개념</h4>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageStudyConcept;
