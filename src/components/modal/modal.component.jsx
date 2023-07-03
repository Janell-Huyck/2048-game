import React, { useEffect } from 'react';
import './modal.styles.css';

const Modal = ({ children, onClose }) => {
    
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


    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) { 
            onClose();
        }
    }

    return (
        <div className='modal' id='modal' onClick={handleBackgroundClick}>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
