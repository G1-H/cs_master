import Board from "../Board";
const MyPageBookmarkConcept = (props) => {
  return (
    <div>
      <h4>북마크 개념</h4>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageBookmarkConcept;
