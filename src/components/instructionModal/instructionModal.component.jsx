import React from 'react';
import Modal from '../modal/modal.component';

const InstructionModal = ({ onClose }) => (
    <Modal onClose={onClose}>
        <h2>Instructions</h2>
        <p>Instructions for your game go here...</p>
    </Modal>
);

export default InstructionModal;
