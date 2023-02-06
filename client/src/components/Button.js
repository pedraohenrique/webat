import React from 'react';

function Button({ label, ...props }) {
  return (
    <button className="bg-secondary rounded-full text-white" {...props}>
      {label}
    </button>
  );
}

export default Button;
