import React, { createContext, useState, useContext } from 'react';

// Create context for managing overlays in the game.
const overlaysContext = createContext();

// Provider component for the overlays context.
export const OverlaysProvider = ({ children }) => {
    // State for visibility of instructions.
    const [instructionsVisible, setInstructionsVisible] = useState(false);

    // Function to toggle instructions visibility.
    const toggleInstructions = () => {
        setInstructionsVisible(prev => !prev);
    };

    // Provide context to child components.
    return (
        <overlaysContext.Provider value={{ instructionsVisible, toggleInstructions }}>
            {children}
        </overlaysContext.Provider>
    );
};

// Custom hook to consume overlays context.
export const useOverlays = () => useContext(overlaysContext);
