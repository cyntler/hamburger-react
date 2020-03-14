import React from 'react'

export default ({ children, last }) => (
  <div
    className={
      'flex flex-col' + (last ? '' : ' mb-8 pb-8 border-b-2 border-gray-700')
    }
  >
    <div className="flex items-center mb-4 justify-between">
      {children[0]}
      <div className="flex items-center">
        <div className="font-medium text-gray-500 mr-4">Example:</div>
        {children[1]}
      </div>
    </div>
    <p className="text-sm mb-6">{children[2]}</p>
    <code className="text-sm px-6 py-4 rounded-md bg-indigo-800 shadow-inner">
      {children[3]}
    </code>
  </div>
)
