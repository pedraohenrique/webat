import React from 'react';

function FormSelectField({ label, name, options, ...props }) {
  return (
    <div className="bg-primary-100 px-2 py-2 w-[100%]">
      <p className="text-xs text-gray-400 text-bold">{label}</p>
      <select
        name={name}
        className="focus:outline-0 bg-primary-100 w-[100%] text-gray-500"
        {...props}
      >
        options=
        <option value="">-</option>
        {options.map((opt, i) => (
          <option value={opt} key={i}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelectField;
