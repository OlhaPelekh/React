import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Body from "./Body.js";
import { useState, useEffect } from "react";

function App() {
  const initialEmojis = [
    { id: "1", count: 0, emoji: "😃" },
    { id: "2", count: 0, emoji: "😊" },
    { id: "3", count: 0, emoji: "😎" },
    { id: "4", count: 0, emoji: "😍" },
    { id: "5", count: 0, emoji: "😻" },
  ];

  const [countObj, setCountObj] = useState(initialEmojis);

  useEffect(() => {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      setCountObj(JSON.parse(savedVotes));
    }
  }, []);

  return <Body countObj={countObj} setCountObj={setCountObj} />;
}

export default App;
