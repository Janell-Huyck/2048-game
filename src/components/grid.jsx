import React, { useState, useEffect } from 'react';
import Cell from './cell';
import './grid.css';

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  const moveTiles = (direction) => {
    let oldGridData = JSON.parse(JSON.stringify(gridData));
    let newArray = null;

    switch (direction) {
      case 'UP':
        newArray = oldGridData[0].map((_, i) => oldGridData.map(row => row[i]));
        newArray = newArray.map(row => row.filter(val => val).concat(Array(4).fill(0)).slice(0, 4));
        newArray = newArray[0].map((_, i) => newArray.map(row => row[i]));
        break;
      case 'DOWN':
        newArray = oldGridData[0].map((_, i) => oldGridData.map(row => row[i]));
        newArray = newArray.map(row => Array(4).fill(0).concat(row.filter(val => val)).slice(-4));
        newArray = newArray[0].map((_, i) => newArray.map(row => row[i]));
        break;
      case 'LEFT':
        newArray = oldGridData.map(row => row.filter(val => val).concat(Array(4).fill(0)).slice(0, 4));
        break;
      case 'RIGHT':
        newArray = oldGridData.map(row => Array(4).fill(0).concat(row.filter(val => val)).slice(-4));
        break;
      default:
        break;
    }

    if (JSON.stringify(oldGridData) !== JSON.stringify(newArray)) {
      setGridData(newArray);
    }
  };


  const handleKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowUp':
        moveTiles('UP');
        break;
      case 'ArrowDown':
        moveTiles('DOWN');
        break;
      case 'ArrowLeft':
        moveTiles('LEFT');
        break;
      case 'ArrowRight':
        moveTiles('RIGHT');
        break;
      default:
        console.log("Invalid key pressed");
        break;
    }
  }

  const initializeGrid = () => {
    const initialData = Array.from({ length: 4 }).map(() =>
      Array.from({ length: 4 }).fill(0)
    );
  
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


  useEffect(() => {
    initializeGrid(); 
  }, []);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gridData]);



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
