import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>Let's play Hangman.</div>
      </header>
      <nav className="app-nav">
        <Link className="nav-item" to="/easyhangman">
          <button>Easy</button>
        </Link>
        <Link className="nav-item" to="/mediumhangman">
          <button>Medium</button>
        </Link>
        <Link className="nav-item" to="/hardhangman">
          <button>Hard</button>
        </Link>
      </nav>
    </div>
  );
}

export default App;
