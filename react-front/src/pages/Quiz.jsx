import { Outlet } from "react-router-dom";

const Quiz = (props) => {
  return (
    <div
      className="main-container"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet></Outlet>
    </div>
  );
};

export default Quiz;
