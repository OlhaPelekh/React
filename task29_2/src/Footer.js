import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function Footer() {
  const counter = useSelector((state) => state.todo.items.length);
  return (
    <Container>
      <div className="p-2">Всього: {counter}</div>
    </Container>
  );
}

export default Footer;
