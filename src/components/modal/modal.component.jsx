import React, { useEffect } from 'react';
import './modal.styles.css';

// Modal component that serves as a general-purpose modal dialog box. 
const Modal = ({ children, onClose }) => {
    
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
        <div className='modal' id='modal' onClick={handleBackgroundClick}>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                {/* Render the content passed as children to the Modal */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
