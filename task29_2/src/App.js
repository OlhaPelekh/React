import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./Todo.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="container">
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
