import React from 'react';
import { TbArrowsMaximize } from 'react-icons/tb';
import { CiUndo } from 'react-icons/ci';

function Card({ icon, title, refresh = false, onRefresh, children }) {
  return (
    <div className="bg-white rounded py-4">
      <div className="flex px-4 pb-2 items-center">
        <div className="flex items-center space-x-2 w-full">
          <div className="text-secondary">{icon}</div>
          <h3 className="text-primary">{title}</h3>
        </div>
        <div className="text-gray-400 flex items-end space-x-2">
          {refresh && <CiUndo onClick={onRefresh} className="cursor-pointer" />}
          <TbArrowsMaximize />
        </div>
      </div>
      <hr />
      {children}
    </div>
  );
}

export default Card;
