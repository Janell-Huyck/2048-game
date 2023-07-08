import React, { useEffect, useCallback } from 'react';
import { ModalContainer, ModalContent, CloseButton } from './modal.styles';
import { useGameContext } from '../../contexts/gameContext';

// Modal component that serves as a general-purpose modal dialog box. 
const Modal = ({ children }) => {
    const { gameDispatch } = useGameContext();

    // Function to close the modal.
    const onClose = useCallback(() => {
        //set game to active
        gameDispatch({ type: 'ACTIVATE_GAME' });
        //set show instructions to false
        gameDispatch({ type: 'HIDE_INSTRUCTIONS' });
        //close the modal
        gameDispatch({ type: 'HIDE_GAME_OVER' });
    }, [gameDispatch]);

    // When the modal is shown, set gameActive to false.
    useEffect(() => {
        gameDispatch({ type: 'DEACTIVATE_GAME' });
    }, [gameDispatch]);

    // Using the 'Escape' key will close the modal.
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscape, false);
        return () => {
            window.removeEventListener('keydown', handleEscape, false);
        };
    }, [onClose]);

    // Clicking outside the modal (on the background) will also close the modal.
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) { 
            onClose();
        }
    }

    return (
        <ModalContainer onClick={handleBackgroundClick}>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {/* Render the content passed as children to the Modal */}
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
