import React from 'react'

export default ({ name, type }) => (
  <div className="flex items-baseline">
    <div
      className="
          border-2
          bg-purple-900
          border-purple-600
          rounded
          shadow-inner
          py-1
          px-6
          text-center
          mr-6
          mb-2
          font-medium border-solid
        "
    >
      {name}
    </div>
    <div className="font-medium text-gray-500 mr-2">Type:</div>
    <div className="font-medium text-lg">{type}</div>
  </div>
)
