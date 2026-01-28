import PropTypes from 'prop-types';

/**
 * Button component using DaisyUI classes
 */
function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) {
  // 'btn' is the base DaisyUI class. 
  // We remove the manual padding/rounded classes because DaisyUI handles them.
  const baseStyles = 'btn transition-all duration-200';
  
  const variants = {
    // DaisyUI variants map directly to these classes
    primary: 'btn-primary', 
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    danger: 'btn-error', // 'error' is the standard DaisyUI semantic name for danger
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;