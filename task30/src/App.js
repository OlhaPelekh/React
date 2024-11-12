import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Search />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
