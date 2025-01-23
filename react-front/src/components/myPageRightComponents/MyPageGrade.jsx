import ProgressBar from "react-bootstrap/ProgressBar";

const MyPageGrade = (props) => {
  const grade = 50;
  return (
    <div
      style={{
        width: "50%",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      <div style={{ marginBottom: "30px" }}>나의 등급 </div>
      <ProgressBar now={grade} label={"great"} />
    </div>
  );
};

export default MyPageGrade;
