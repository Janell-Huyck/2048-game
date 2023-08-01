import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/home/home.component';
import { GameProvider } from '../../contexts/gameContext';
import { SwipeProvider } from '../../contexts/swipeContext';



describe('Grid test', () => {
  test('Grid is a square', () => {
       // Mock window size
       Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1200
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 800
      });

    render(
        <GameProvider>
            <SwipeProvider>
                <Home />
            </SwipeProvider>
        </GameProvider>    
    );

    const grid = screen.getByTestId('grid');

    // Use getComputedStyle to access the actual CSS values. Note that getComputedStyle returns pixel values as strings with 'px' at the end, so you'll need to remove that to do a numerical comparison.
    const style = window.getComputedStyle(grid);
    const width = parseInt(style.width.replace('px', ''));
    const height = parseInt(style.height.replace('px', ''));

    expect(width).toEqual(height);
  });
});
