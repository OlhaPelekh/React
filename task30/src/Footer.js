import { useDispatch } from "react-redux";
import { clearData } from "./store/actions";
import { Button } from "react-bootstrap";

function Footer() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <footer className="text-center p-3 bg-light">
      <Button variant="outline-danger" onClick={handleClear}>
        Clear Data
      </Button>
    </footer>
  );
}

export default Footer;
