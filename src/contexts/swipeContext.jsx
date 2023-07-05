import React, { createContext, useContext, useState } from 'react';

// Create the context
const SwipeContext = createContext();

// Create a provider that holds the state
export function SwipeProvider({ children }) {
    const [swipeStart, setSwipeStart] = useState({ x: null, y: null });
  
    const handleTouchStart = (e) => {
      e.preventDefault()
      setSwipeStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    };
  
    const handleSwipe = (e) => {
      e.preventDefault();
      const swipeEndX = e.changedTouches[0].clientX;
      const swipeEndY = e.changedTouches[0].clientY;
      const diffX = swipeEndX - swipeStart.x;
      const diffY = swipeEndY - swipeStart.y;

      // Don't do anything if the swipe was too small - assume it was intended as a click
      if (diffX < 1 && diffY < 1) {
        e.target.click();
        return;
      }

      let direction;
  
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        direction = diffX > 0 ? 'RIGHT' : 'LEFT';
      } else {
        // Vertical swipe
        direction = diffY > 0 ? 'DOWN' : 'UP';
      }
      return direction;
    };
  
    // Provide the state and handlers to children
    return (
      <SwipeContext.Provider value={{ handleTouchStart, handleSwipe }}>
        {children}
      </SwipeContext.Provider>
    );
  }
  

// Custom hook to use the swipe context
export function useSwipe() {
  return useContext(SwipeContext);
}



