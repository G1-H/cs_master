import Pagination from "react-bootstrap/Pagination";
const MyPagination = (props) => {
  return (
    <Pagination size="sm" style={{ marginTop: "5px" }}>
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default MyPagination;
