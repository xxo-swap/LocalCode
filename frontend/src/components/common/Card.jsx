import PropTypes from 'prop-types';

/**
 * Card component using daisyUI classes
 * Uses theme-aware colors and elevation
 */
function Card({ children, className = '', hover = false, ...props }) {
  // 'card' is the base container
  // 'bg-base-200' gives it a slightly different shade than the main background
  // 'shadow-xl' adds depth
  const baseStyles = 'card shadow-xl border border-base-300 bg-base-300/50';
  
  // DaisyUI provides 'hover' effects or we can use standard Tailwind transitions
  const hoverStyles = hover ? 'hover:bg-base-300 transition-all duration-300 cursor-pointer' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {/* 'card-body' provides the standard padding (p-6 equivalent) */}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;