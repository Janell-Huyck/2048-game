import React, { useEffect, useCallback } from 'react';
import { ModalContainer, ModalContent, CloseButton } from './modal.styles';
import { useGameContext } from '../../contexts/gameContext';

const Modal = ({ children }) => {
    const { gameDispatch } = useGameContext();
    const onClose = useCallback(() => {
        gameDispatch({ type: 'ACTIVATE_GAME' });
        gameDispatch({ type: 'HIDE_INSTRUCTIONS' });
        gameDispatch({ type: 'HIDE_GAME_OVER' });
    }, [gameDispatch]);

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
