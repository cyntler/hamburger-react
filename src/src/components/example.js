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
        <div className="font-medium text-gray-500 mr-2">Example:</div>
        {children[1]}
      </div>
    </div>
    <code class="text-xs px-6 py-4 rounded bg-indigo-800 shadow-inner">
      {children[2]}
    </code>
  </div>
)
