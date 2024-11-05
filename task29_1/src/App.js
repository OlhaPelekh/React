import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Stack} from "react-bootstrap";
import Counter from "./Counter.js";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state)=>state.counter.value);
  return (
    <div className="App-container">
      <div className="App">
        <Stack gap={2}>
          <div className="p-2">Value:{counter}</div>
          <Counter />
        </Stack>
      </div>
    </div>
  );
}

export default App;
