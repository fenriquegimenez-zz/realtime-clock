import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock isPrecise={true} />
        <a
          className="App-link"
          href="https://github.com/fenriquegimenez/realtime-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Clock
        </a>
        <p
          className="App-link"
          href="https://github.com/fenriquegimenez/realtime-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's open source!
        </p>
      </header>
    </div>
  );
}

export default App;
