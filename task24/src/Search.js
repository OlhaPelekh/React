import Button from 'react-bootstrap/Button';
export function Search() {
  return (
    <div className="App">
      <form class="App-search">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>{" "}
        </div>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="people/1/"
          aria-label="API URL"
        />
        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Get Info
        </button> */}
           <Button variant="light">Get Info</Button>
      </form>
    </div>
  );
}

export default Search;
