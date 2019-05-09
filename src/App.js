import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ChessGame from "./components/ChessGame";

function App({ kPos }) {
  return (
    <div className="App">
      <ChessGame knightPos={kPos} />
    </div>
  );
}

export default App;
