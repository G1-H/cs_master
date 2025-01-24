import { useLocation } from "react-router-dom";
import { Image, InputGroup, Button, Form } from "react-bootstrap";
import heartFillSvg from "../assets/heart-fill.svg";
import starFillSvg from "../assets/star-fill.svg";
import DropdwonButton from "./DropdownButton";
import { useState } from "react";

const DetailView = () => {
  const location = useLocation();
  const [replyingTo, setReplyingTo] = useState(null); // 대댓글 작성 중인 댓글 인덱스
  const [replies, setReplies] = useState({}); // 대댓글 저장
  const [replyText, setReplyText] = useState(""); // 대댓글 입력 텍스트

  const content = location.state || {
    title: "제목 없음",
    detail: "내용이 없습니다.",
    comments: [
      { user: "User1", comment: "This is a comment." },
      { user: "User2", comment: "Another comment." },
    ],
  };

  const handleReplyClick = (index) => {
    setReplyingTo(replyingTo === index ? null : index); // 같은 댓글 클릭 시 토글
  };

  const handleReplySubmit = (index) => {
    if (replyText.trim() === "") return; // 공백 입력 방지

    setReplies((prevReplies) => ({
      ...prevReplies,
      [index]: [...(prevReplies[index] || []), replyText], // 기존 댓글에 대댓글 추가
    }));

    setReplyingTo(null); // UI 숨기기
    setReplyText(""); // 입력 필드 초기화
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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
              items={[
                { label: "이전버전으로", to: "#/action-1" },
                { label: "삭제 요청", to: "#/action-2" },
              ]}
            />
            <DropdwonButton
              title="수정"
              variant="success"
              items={[
                {
                  label: "문제 만들기",
                  to: "/quiz-create",
                  state: { detail: content.detail, title: content.title },
                },
                {
                  label: "개념 수정",
                  to: "/concept-update",
                  state: {
                    detail: content.detail,
                    title: content.title,
                    category: content.category,
                  },
                },
                { label: "개념 추가", to: "/concept-create" },
              ]}
            />
          </div>
        </div>

        <div className="imgContainer">
          <Image style={{ marginBottom: "15px" }} fluid src={content.img} />
        </div>

        <div className="contentContainer">
          <div>
            <div>{content.detail}</div>
            <div style={{ textAlign: "right" }}>by {content.author}</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h5>댓글 </h5>
          <InputGroup className="mb-3" size="sm">
            <Form.Control aria-label="Text input with dropdown button" />
            <Button
              variant="dark"
              title="Action"
              id="segmented-button-dropdown-2"
            >
              댓글
            </Button>
          </InputGroup>
        </div>
        <div>
          <ul>
            {content.comments.map((comment, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <div>
                  <span>{comment.user}:</span>
                  <span> {comment.comment}</span>
                  <span
                    style={{ cursor: "pointer", paddingLeft: "5px" }}
                    onClick={() => handleReplyClick(index)}
                  >
                    ⏎
                  </span>
                </div>

                {/* 대댓글 UI */}
                {replyingTo === index && (
                  <div style={{ marginTop: "10px" }}>
                    <InputGroup size="sm">
                      <Form.Control
                        placeholder="대댓글을 입력하세요"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <Button
                        variant="light"
                        onClick={() => handleReplySubmit(index)}
                      >
                        등록
                      </Button>
                    </InputGroup>
                  </div>
                )}

                {/* 대댓글 출력 */}
                {replies[index] && (
                  <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
                    {replies[index].map((reply, idx) => (
                      <li key={idx}>
                        <span>익명: </span>
                        <span>{reply}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
