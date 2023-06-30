import React, { useState, useEffect } from 'react';
import Cell from './cell';
import './grid.css';

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const initialData = Array.from({ length: 4 }).map(() =>
      Array.from({ length: 4 }).fill(0)
    );
  
    // Randomly select two cells and assign either 2 or 4
    for (let i = 0; i < 2; i++) {
      const emptyCells = [];
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (initialData[row][col] === 0) {
            emptyCells.push({ row, col });
          }
        }
      }
  
      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const { row, col } = emptyCells[randomIndex];
        const randomValue = Math.random() < 0.5 ? 2 : 4;
        initialData[row][col] = randomValue;
      }
    }
  
    setGridData(initialData);
  };
  
  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cellValue, colIndex) => (
            <Cell key={colIndex} value={cellValue} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
