import React, { useState, useEffect } from 'react';
import Cell from './cell';
import './grid.css';

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  const moveTiles = (direction) => {
    let oldGridData = JSON.parse(JSON.stringify(gridData)); // Make a deep copy of the original state
    let newArray;
  
    switch (direction) {
      case 'UP':
        newArray = mergeAndSlide(oldGridData, 'UP');
        break;
      case 'DOWN':
        newArray = mergeAndSlide(oldGridData, 'DOWN');
        break;
      case 'LEFT':
        newArray = mergeAndSlide(oldGridData, 'LEFT');
        break;
      case 'RIGHT':
        newArray = mergeAndSlide(oldGridData, 'RIGHT');
        break;
      default:
        console.log("Invalid direction");
        return;
    }
  
    if (JSON.stringify(oldGridData) !== JSON.stringify(newArray)) {
      newArray = addNewNumber(newArray);
      setGridData(newArray);
    }
  };
  
  const mergeAndSlide = (oldArray, direction) => {
    switch (direction) {
      case 'UP':
        return oldArray[0].map((col, c) => merge(oldArray.map(row => row[c])));
      case 'DOWN':
        return oldArray[0].map((col, c) => merge(oldArray.map(row => row[c])).reverse());
      case 'LEFT':
        return oldArray.map(row => merge(row));
      case 'RIGHT':
        return oldArray.map(row => merge(row).reverse());
      default:
        return oldArray;
    }
  };
  

  const addNewNumber = (newArray) => {
    const emptyCells = [];
    
    for (let row = 0; row < newArray.length; row++) {
      for (let col = 0; col < newArray[0].length; col++) {
        if (newArray[row][col] === 0) { // We found an empty cell
          emptyCells.push({ row, col });
        }
      }
    }
  
    if (emptyCells.length === 0) {
      return newArray;
    }
  
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];
    const randomValue = Math.random() < 0.5 ? 2 : 4;
  
    newArray[randomCell.row][randomCell.col] = randomValue;
    
    return newArray;
  };

  const merge = (row) => {
    let compactedRow = row.filter(val => val !== 0);  // remove zeros from the row
    let newRow = [];
    let i = 0;
  
    while (i < compactedRow.length) {
      if (i !== compactedRow.length - 1 && compactedRow[i] === compactedRow[i + 1]) {
        newRow.push(compactedRow[i] * 2);
        i += 2;  // move two steps forward in compactedRow
      } else {
        newRow.push(compactedRow[i]);
        i += 1;  // move one step forward in compactedRow
      }
    }
  
    // fill the rest of the row with 0s
    while (newRow.length < row.length) {
      newRow.push(0);
    }
  
    return newRow;
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
