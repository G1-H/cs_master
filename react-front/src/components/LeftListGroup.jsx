import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const LeftListGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { items, styles, onSelect } = props;
  const navigate = useNavigate(); // React Router 네비게이션 훅
  const handleClick = (index, to) => {
    setSelectedIndex(index);
    onSelect(index);
    navigate(to);
  };

  return (
    <ListGroup className="leftListGroup" as="ul" style={{ cursor: "pointer" }}>
      {items.map((item, index) => {
        return (
          <ListGroup.Item
            className={`listItem ${selectedIndex === index ? "selected" : ""}`}
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
