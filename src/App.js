import React, { useState } from "react";
import "./App.css";

function App() {
  const initialGrid = Array.from({ length: 10 }, () => Array(10).fill(""));
  const [grid, setGrid] = useState(initialGrid);
  const [formula, setFormula] = useState("");

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = grid.map((row, r) => 
      row.map((cell, c) => (r === rowIndex && c === colIndex ? value : cell))
    );
    setGrid(newGrid);
  };

  const handleFormulaSubmit = () => {
    const match = formula.match(/=(\w+)\(([A-Z]\d+):([A-Z]\d+)\)/);
    if (!match) {
      alert("Invalid formula format. Use =FUNCTION(A1:A10)");
      return;
    }

    const [, func, startCell, endCell] = match;
    const startCol = startCell.charCodeAt(0) - 65;
    const startRow = parseInt(startCell.slice(1)) - 1;
    const endCol = endCell.charCodeAt(0) - 65;
    const endRow = parseInt(endCell.slice(1)) - 1;

    const range = [];
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        range.push(grid[row][col]);
      }
    }

    let result;
    switch (func.toUpperCase()) {
      case "SUM":
        result = sum(range);
        break;
      case "AVERAGE":
        result = average(range);
        break;
      case "MAX":
        result = max(range);
        break;
      case "MIN":
        result = min(range);
        break;
      case "COUNT":
        result = count(range);
        break;
      default:
        alert("Unsupported function");
        return;
    }
    alert(`Result: ${result}`);
  };

  const sum = (range) => range.reduce((acc, val) => acc + Number(val), 0);
  const average = (range) => sum(range) / range.length;
  const max = (range) => Math.max(...range.map(Number));
  const min = (range) => Math.min(...range.map(Number));
  const count = (range) => range.filter((val) => !isNaN(val)).length;

  const handleTrim = () => {
    setGrid(grid.map(row => row.map(cell => (typeof cell === "string" ? cell.trim() : cell))));
  };

  const handleUpper = () => {
    setGrid(grid.map(row => row.map(cell => (typeof cell === "string" ? cell.toUpperCase() : cell))));
  };

  const handleLower = () => {
    setGrid(grid.map(row => row.map(cell => (typeof cell === "string" ? cell.toLowerCase() : cell))));
  };

  const handleRemoveDuplicates = () => {
    const seen = new Set();
    const newGrid = grid.map(row => row.filter(cell => {
      if (seen.has(cell)) {
        return false;
      }
      seen.add(cell);
      return true;
    }));
    setGrid(newGrid);
  };

  const handleFindAndReplace = () => {
    const find = prompt("Enter text to find:");
    const replace = prompt("Enter text to replace with:");
    if (find === null || replace === null) return;
    setGrid(grid.map(row => row.map(cell => (typeof cell === "string" ? cell.replace(new RegExp(find, "g"), replace) : cell))));
  };

  return (
    <div className="App">
      <h1>Google Sheets Clone</h1>
      <div className="formula-bar">
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="Enter formula (e.g., =SUM(A1:A10))"
        />
        <button onClick={handleFormulaSubmit}>Evaluate</button>
      </div>
      <div className="data-quality-buttons">
        <button onClick={handleTrim}>TRIM</button>
        <button onClick={handleUpper}>UPPER</button>
        <button onClick={handleLower}>LOWER</button>
        <button onClick={handleRemoveDuplicates}>REMOVE DUPLICATES</button>
        <button onClick={handleFindAndReplace}>FIND AND REPLACE</button>
      </div>
      <div className="spreadsheet">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
