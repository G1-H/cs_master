import { ListGroup } from "react-bootstrap";
import MyPagination from "./MyPagination";
import { useNavigate, useOutletContext } from "react-router-dom";
const Board = (props) => {
  const { contents, styles } = useOutletContext();
  const navigate = useNavigate();

  const onContentClick = (content) => {
    navigate(`/learning/${content.category}/detail/${content.id}`, {
      state: content,
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <ListGroup>
        {contents.map((content, index) => {
          return (
            <ListGroup.Item
              key={index}
              style={styles.contentList}
              onClick={() => onContentClick(content)} // 상세보기로 이동
            >
              {content.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <MyPagination />
    </div>
  );
};

export default Board;
