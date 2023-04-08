import React from "react";
import axios from "axios";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dick-Van-Dyke-tionary</h1>
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
