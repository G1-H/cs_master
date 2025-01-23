import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const LeftListGroup = (props) => {
  const { items, styles, onSelect } = props;
  const navigate = useNavigate(); // React Router 네비게이션 훅
  const handleClick = (index, to) => {
    onSelect(index);
    navigate(to);
  };

  return (
    <ListGroup className="leftListGroup" as="ul" style={{ cursor: "pointer" }}>
      {items.map((item, index) => {
        return (
          <ListGroup.Item
            key={index}
            style={styles.listGroupItem}
            onClick={() => handleClick(index, item.to)}
          >
            {item.title}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default LeftListGroup;
