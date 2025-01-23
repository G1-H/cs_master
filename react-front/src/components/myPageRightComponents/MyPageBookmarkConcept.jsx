import Board from "../Board";
const MyPageBookmarkConcept = (props) => {
  return (
    <div
      style={{
        width: "50%",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      <h3>북마크 개념</h3>
      <Board contents={props.contents} styles={props.styles} />
    </div>
  );
};
export default MyPageBookmarkConcept;
