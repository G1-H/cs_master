import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const DropdwonButton = (props) => {
  const { variant, title, items, onItemClick } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} id="dropdown-basic" size="sm">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => {
          return (
            <Dropdown.Item
              key={index}
              as={Link}
              to={item.to}
              state={item.state}
              onClick={() => onItemClick?.(item)}
            >
              {item.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdwonButton;
