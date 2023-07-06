import React, { createContext, useContext, useState } from 'react';

// Create the context
const SwipeContext = createContext();

// Provider component for the swipe context.
export function SwipeProvider({ children }) {
    // State for storing the start point of a swipe.
    const [swipeStart, setSwipeStart] = useState({ x: null, y: null });
  
    // Handler for the start of a touch event.
    const handleTouchStart = (e) => {
      e.preventDefault()
      // Set the start point of the swipe.
      setSwipeStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    };
  
    // Handler for a swipe.
    const handleSwipe = (e) => {
      e.preventDefault();
      // Get the end point of the swipe.
      const swipeEndX = e.changedTouches[0].clientX;
      const swipeEndY = e.changedTouches[0].clientY;

      // Calculate the difference in x and y coordinates from the start to the end of the swipe.
      const diffX = swipeEndX - swipeStart.x;
      const diffY = swipeEndY - swipeStart.y;

      // Don't do anything if the swipe was too small - assume it was intended as a click.
      if (Math.abs(diffX) < 0.5 && Math.abs(diffY) < 0.5) {
        e.target.click();
        return;
      }

      let direction;
  
      // Determine the direction of the swipe.
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe.
        direction = diffX > 0 ? 'RIGHT' : 'LEFT';
      } else {
        // Vertical swipe.
        direction = diffY > 0 ? 'DOWN' : 'UP';
      }
      return direction;
    };
  
    // Provide the state and handlers to children.
    return (
      <SwipeContext.Provider value={{ handleTouchStart, handleSwipe }}>
        {children}
      </SwipeContext.Provider>
    );
}

// Custom hook to consume swipe context.
export function useSwipe() {
  return useContext(SwipeContext);
}
