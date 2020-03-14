import React from 'react'

export default ({ name, type }) => (
  <div
    className="
    flex
    items-baseline
  "
  >
    <div
      className="
      border-2
      bg-purple-900
      border-purple-600
      rounded
      py-1
      text-center
      mr-6
      w-24
      font-medium
      border-solid
    "
    >
      {name}
    </div>
    <div className="font-medium text-gray-500 mr-2">Type:</div>
    <div className="font-medium text-lg">{type}</div>
  </div>
)
