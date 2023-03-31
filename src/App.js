import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <img src="./media/search.gif" alt="magnifying glass" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
        <a href="https://github.com/nonagongirl/dictionary-app">
          Open-source code
        </a>{" "}
        by Stef Braithwaite
      </footer>
    </div>
  );
}

export default App;
