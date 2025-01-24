import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import heartFillSvg from "../assets/heart-fill.svg";
import starFillSvg from "../assets/star-fill.svg";
import DropdwonButton from "./DropdownButton";

const DetailView = () => {
  const location = useLocation();
  const content = location.state || {
    title: "제목 없음",
    detail: "내용이 없습니다.",
  };
  const reportDropdown = [
    { label: "이전버전으로", href: "#/action-1" },
    { label: "삭제 요청", href: "#/action-2" },
  ];
  const updateDropdown = [
    { label: "문제 만들기", href: "#/action-1" },
    { label: "개념 수정", href: "#/action-2" },
    { label: "개념 추가", href: "#/action-2" },
  ];

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
            src={heartFillSvg}
            alt="좋아요"
          />
          {content.likes}
          <img
            style={{ width: "20px", marginRight: "5px" }}
            src={starFillSvg}
            alt="북마크"
          />
        </div>
        <div>
          <DropdwonButton
            title="신고"
            variant="danger"
            items={reportDropdown}
            onItemClick=""
          />
          <DropdwonButton
            title="수정"
            variant="success"
            items={updateDropdown}
            onItemClick=""
          />
        </div>
      </div>

      <div className="imgContainer">
        <Image style={{ marginBottom: "15px" }} fluid src={content.img} />
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
