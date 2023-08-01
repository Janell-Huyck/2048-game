// Custom context for handling swipes on mobile devices.

import React, { createContext, useContext, useState } from 'react';
const SwipeContext = createContext();

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

      // Don't do anything if the swipe was too small - assume it was intended as a click.
      if (Math.abs(diffX) < 0.5 && Math.abs(diffY) < 0.5) {
        e.target.click();
        return;
      }

      let direction;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        direction = diffX > 0 ? 'RIGHT' : 'LEFT';
      } else {
        direction = diffY > 0 ? 'DOWN' : 'UP';
      }
      return direction;
    };
  
    return (
      <SwipeContext.Provider value={{ handleTouchStart, handleSwipe }}>
        {children}
      </SwipeContext.Provider>
    );
}

export function useSwipe() {
  return useContext(SwipeContext);
}
