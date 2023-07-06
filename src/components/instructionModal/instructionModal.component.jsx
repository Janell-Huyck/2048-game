import React from 'react';
import Modal from '../modal/modal.component';
import { useOverlays } from '../../contexts/overlaysContext';


const InstructionModal = () => {
    const { toggleInstructions } = useOverlays();

    return (
        <Modal onClose={toggleInstructions}>
            <h2>Welcome to 2048!</h2>
            <ul>
                <li><strong>Start:</strong> The game begins with some 2s and 4s on a grid.</li>
                <li><strong>Move:</strong> Use your keyboard's arrow keys to slide all tiles in one direction.</li>
                <li><strong>Combine:</strong> Tiles with the same number merge into a larger number when they collide.</li>
                <li><strong>Goal:</strong> Your aim is to create a tile with the number 2048.</li>
                <li><strong>End:</strong> The game is over when you can't move any tiles and the grid fills up.</li>
                <li><strong>New Game:</strong> Start over anytime by clicking on "New Game".</li>
            </ul>
            <h4>Remember, think before each move.</h4>
            <h3> Good luck!</h3>
        </Modal>
    )
};

export default InstructionModal;
