import React from 'react';
import './cell.css';

const Cell = ({ value }) => {
    return (
      <div className={`cell cell-${value}`}>
        {value !== 0 && <div className="number">{value}</div>}
      </div>
    );
  };
  

export default Cell;
