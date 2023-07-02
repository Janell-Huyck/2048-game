import React, { useEffect } from 'react';
import './cell.css';

function getCellColor(value) {
  const colorMap = {
    2: '#eee4da',
    4: '#ede0c8',
    8: '#f2b179',
    16: '#f59563',
    32: '#f67c5f',
    64: '#f65e3b',
    128: '#edcf72',
    256: '#edcc61',
    512: '#edc850',
    1024: '#edc53f',
    2048: '#edc22e',
    // Add more values as necessary
  };

  return colorMap[value] || '#cdc1b4'; // default color if value not found
}

const Cell = ({ value, isNew }) => {
  const cellClass = isNew ? 'cell new-cell' : 'cell';

  // Adjust the height of the cell to match its width
  useEffect(() => {
    function adjustHeight() {
      const cellElements = document.querySelectorAll('.cell');
      if (cellElements.length > 0) {
        Array.from(cellElements).forEach(cellElement => {
          const width = window.getComputedStyle(cellElement).getPropertyValue('width');
          cellElement.style.height = width;
        });
      }
    }
  
    window.addEventListener('resize', adjustHeight);
    adjustHeight();
  
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);
  
    return (
      <div className={cellClass} style={{ backgroundColor: getCellColor(value) }}>
        {value !== 0 && <div className="number">{value}</div>}
      </div>
    );
  };
  

export default Cell;
