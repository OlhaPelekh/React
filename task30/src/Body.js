import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function Body() {
  const { data, loading, error } = useSelector((state) => state);

  return (
    <div className="container my-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data ? (
        <Card>
          <Card.Body>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-center text-muted">No data loaded.</p>
      )}
    </div>
  );
}

export default Body;
