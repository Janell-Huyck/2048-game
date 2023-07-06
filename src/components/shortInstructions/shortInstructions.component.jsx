import React from 'react';
import { ShortInstructionsContainer } from './shortInstructions.styles';

const ShortInstructions = () => {
    
        return (
            <ShortInstructionsContainer>
                <p>Use arrow keys to slide all tiles. When two tiles with the same number touch, 
                they merge into one with double the value.</p>
                <p>Join the numbers to get to <strong>2048!</strong></p>
            </ShortInstructionsContainer>
        );
    }

export default ShortInstructions;