import React, { createContext, useState, useContext } from 'react';

const overlaysContext = createContext();

export const OverlaysProvider = ({ children }) => {
    const [instructionsVisible, setInstructionsVisible] = useState(false);

    const toggleInstructions = () => {
        setInstructionsVisible(prev => !prev);
    };

    return (
        <overlaysContext.Provider value={{ instructionsVisible, toggleInstructions }}>
            {children}
        </overlaysContext.Provider>
    );
};

export const useOverlays = () => useContext(overlaysContext);








// // Usage within components
// // ...
// const SomeComponent = () => {
//   const { toggleInstructions } = useContext(InstructionsContext);
//   const { toggleGameOver } = useContext(GameOverContext);

//   const handleSomeEvent = () => {
//     toggleInstructions();
//     toggleGameOver();
//   };

//   //...
// };
