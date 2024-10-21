import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function Body({ countObj, setCountObj }) {
  const [showResults, setShowResults] = useState(false);

  function toggleResults() {
    setShowResults(!showResults);
  }

  function resetResults() {
    const resetData = countObj.map((emoji) => ({
      ...emoji,
      count: 0,
    }));
    setCountObj(resetData);
    localStorage.setItem("emojiVotes", JSON.stringify(resetData));
  }

  function winnerEmoji() {
    return countObj.reduce((max, emoji) =>
      emoji.count > max.count ? emoji : max
    );
  }

  function handleClick(id) {
    const updatedCountObj = countObj.map((element) =>
      element.id === id ? { ...element, count: element.count + 1 } : element
    );
    setCountObj(updatedCountObj);
    localStorage.setItem("emojiVotes", JSON.stringify(updatedCountObj));
  }

  return (
    <div className="Body">
      <Card style={{ width: "50rem" }}>
        <Card.Body className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title>Голосування за найкращий смайлик</Card.Title>
          <Card.Header className="mt-3 mb-4">
            <Nav variant="pills" defaultActiveKey="#first">
              {countObj.map((item) => (
                <Nav.Item key={item.id}>
                  <Nav.Link
                    as="div"
                    onClick={() => handleClick(item.id)}
                    style={{ cursor: "pointer", color: "inherit" }}
                  >
                    {item.emoji} {item.count}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Card.Header>
          <Button variant="success" onClick={toggleResults}>
            {showResults ? "Hide results" : "Show results"}
          </Button>
          {showResults && (
            <>
              <Card.Text className="mt-3 mb-4">
                Результати голосування: {winnerEmoji()?.emoji} з{" "}
                {winnerEmoji()?.count} голосами.
              </Card.Text>
              <Button variant="danger" onClick={resetResults} className="ml-2">
                Очистити результати
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Body;
