import React from 'react';

function FormField({ label, name, ...props }) {
  return (
    <div className="bg-primary-100 px-2 py-2 w-[100%]">
      <p className="text-xs text-gray-400 text-bold">{label}</p>
      <input
        name={name}
        className="focus:outline-0 bg-primary-100 w-[100%] text-gray-500"
        {...props}
      ></input>
    </div>
  );
}

export default FormField;
