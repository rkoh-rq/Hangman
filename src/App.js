import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>Learn React</div>
      </header>
      <nav className="app-nav">
        <Link className="nav-item" to="/hangman">
          Hangman
        </Link>
      </nav>
    </div>
  );
}

export default App;