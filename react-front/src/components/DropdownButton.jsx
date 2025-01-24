import Dropdown from "react-bootstrap/Dropdown";

const DropdwonButton = (props) => {
  const { variant, title, items, onItemClick } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => {
          return (
            <Dropdown.Item
              key={index}
              href={item.href || "#"}
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
