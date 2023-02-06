import React, { useEffect, useState } from 'react';
import searchCities from '../services/airlabs';

function AutoCompleteFormField({ label, name, value, onSelect, ...props }) {
  const [text, setText] = useState(value);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    const loadLocations = async () => {
      if (text.length > 2) {
        const response = await searchCities(text);
        setLocations(response);
      } else {
        setLocations([]);
      }
    };
    loadLocations();
  }, [text]);

  const handleClick = (item) => {
    setText(item);
    onSelect({ name, value: item });
    setLocations([]);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="bg-primary-100 py-2 w-[100%]">
      <p className="text-xs px-2 text-gray-400 text-bold">{label}</p>
      <input
        name={name}
        className="bg-primary-100 px-2 w-[100%] focus:outline-0 text-gray-500"
        value={text}
        onChange={handleInputChange}
        {...props}
      />
      {locations &&
        locations.map((location, i) => (
          <div
            key={i}
            className="px-2 cursor-pointer hover:bg-primary-500 border-t border-gray-300"
            onClick={() => handleClick(location.name)}
          >
            {location.name}
          </div>
        ))}
    </div>
  );
}

export default AutoCompleteFormField;
