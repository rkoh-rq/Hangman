import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>Let's play Hangman.</div>
      </header>
      <nav className="app-nav">
        <Link to="/easyhangman">
          <button id="difficulty-button" className="btn btn-outline-secondary">
            Easy
          </button>
        </Link>
        <Link to="/mediumhangman">
          <button id="difficulty-button" className="btn btn-outline-secondary">
            Medium
          </button>
        </Link>
        <Link to="/hardhangman">
          <button id="difficulty-button" className="btn btn-outline-secondary">
            Hard
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default App;
