import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import heartSvg from "../assets/heart.svg";
import starSvg from "../assets/star.svg";

const DetailView = () => {
  const location = useLocation();
  const content = location.state || {
    title: "제목 없음",
    detail: "내용이 없습니다.",
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <h2 style={{ marginBottom: 0 }}>{content.title}</h2>
        <div>
          <img
            style={{ width: "20px", marginRight: "5px" }}
            src={heartSvg}
            alt="좋아요"
          />
          {content.likes}
          <img
            style={{ width: "20px", marginRight: "5px" }}
            src={starSvg}
            alt="북마크"
          />
        </div>
      </div>

      <div className="imgContainer">
        <Image
          style={{ marginBottom: "15px" }}
          roundedCircle
          src={content.img}
        />
      </div>

      <div
        className="contentContainer"
        style={{ height: "30vh", overflow: "auto" }}
      >
        <div>{content.detail}</div>
        <div style={{ textAlign: "right" }}>by {content.author}</div>
      </div>
    </div>
  );
};

export default DetailView;
