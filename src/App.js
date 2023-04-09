import React from "react";

import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dick-Van-Dyke-tionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="search" />
      </main>
      <footer className="footer">
        <a
          href="https://github.com/nonagongirl/dictionary-app"
          rel="noreferrer"
          target="blank"
        >
          Open-source code
        </a>{" "}
        by Stef Braithwaite
      </footer>
    </div>
  );
}

export default App;
