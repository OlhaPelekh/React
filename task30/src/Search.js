import { useDispatch } from "react-redux";
import { fetchData } from "./store/actions";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

function Search() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.apiUrl.value;
    const fullUrl = `https://swapi.dev/api/${userInput}`;
    dispatch(fetchData(fullUrl));
  };

  return (
    <div className="my-4">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>https://swapi.dev/api/</InputGroup.Text>
          <FormControl
            type="text"
            name="apiUrl"
            placeholder="people/1/"
            aria-label="API URL"
          />
          <Button variant="outline-success" type="submit">
            Get Info
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default Search;
