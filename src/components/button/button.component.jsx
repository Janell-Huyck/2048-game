// Import the necessary libraries and components
import React from 'react'; 

// Import the styling for the button component
import './button.styles.css'; 

// Define the Button functional component
// It accepts a 'label' for button text and an 'onClick' function as props
const Button = ({ label, onClick }) => (
  // Render a button element with an onClick event listener and the provided label
  // The className "custom-button" is used to apply styling defined in 'button.styles.css'
  <button className="custom-button" onClick={onClick}>
    {label}
  </button>
);

// Export the Button component so it can be used in other parts of the application
export default Button;
