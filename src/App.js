import React from 'react';
import './App.css';
import Chessboard from "./components/chessboard.jsx";


function App() {
  return (
    <div className="App">
      <Chessboard
        boardLinesNumber='8'
        boardColumnsNumber='8'
      />
    </div>
  );
}

export default App;
