import React, {useEffect, useRef} from 'react'; 
import './button.styles.css'; 

// It accepts a 'label' for button text, an 'onClick' function, and a 'ref' as props
const Button = ({ label, onClick, buttonAutoFocus = false }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonAutoFocus && buttonRef.current) {
      // focus the button if buttonAutoFocus is true
      buttonRef.current.focus();
    } else {
      // remove focus from the button if buttonAutoFocus is false
      buttonRef.current.blur();
    }
  }, [buttonAutoFocus]);
return (
  // Render a button element with an onClick event listener and the provided label
  // The className "custom-button" is used to apply styling defined in 'button.styles.css'
  // Pass the 'ref' to the button element
  <button ref={buttonRef} className="custom-button" onClick={onClick}>
    {label}
  </button>
)};

export default Button;
