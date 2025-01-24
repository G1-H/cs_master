import ProgressBar from "react-bootstrap/ProgressBar";

const MyPageGrade = (props) => {
  const grade = 50;
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>나의 등급 </div>
      <ProgressBar now={grade} label={"great"} />
    </div>
  );
};

export default MyPageGrade;
