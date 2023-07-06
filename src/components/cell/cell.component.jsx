import React, { useEffect } from 'react';
import './cell.styles.css';

// Function to map cell values to corresponding colors
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
  };

  // Returns the color for the cell value from the map, or a default color if the value is not in the map
  return colorMap[value] || '#cdc1b4';
}

// Component for individual cell in the grid
const Cell = ({ value, isNew }) => {
  const cellClass = isNew ? 'cell new-cell' : 'cell';

  // Hook to adjust the cell height to match its width
  useEffect(() => {
    function adjustHeight() {
      // Get all the cell elements
      const cellElements = document.querySelectorAll('.cell');
      if (cellElements.length > 0) {
        // Set the height of each cell element to match its width
        Array.from(cellElements).forEach(cellElement => {
          const width = window.getComputedStyle(cellElement).getPropertyValue('width');
          cellElement.style.height = width;
        });
      }
    }
  
    // Add an event listener to adjust cell height when window resizes
    window.addEventListener('resize', adjustHeight);
    // Adjust cell height when the component mounts
    adjustHeight();
  
    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);
  
  // Cell component with color based on its value and containing the value
  return (
    <div className={cellClass} style={{ backgroundColor: getCellColor(value) }}>
      {/* Only display the cell value if it's not 0 */}
      {value !== 0 && <div className="number">{value}</div>}
    </div>
  );
};

export default Cell;
