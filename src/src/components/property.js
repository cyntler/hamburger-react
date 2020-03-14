import React from 'react'

export default ({ name, type }) => (
  <div
    className="
    flex
    items-baseline
    mr-4
    pr-4
    md:mr-8
    md:pr-8
    border-r-2
    border-gray-700
  "
  >
    <div
      className="
      border-2
      bg-purple-900
      border-purple-600
      rounded
      shadow-inner
      py-1
      px-4
      text-center
      mr-6
      font-medium border-solid
    "
    >
      {name}
    </div>
    <div className="font-medium text-gray-500 mr-2">Type:</div>
    <div className="font-medium text-lg">{type}</div>
  </div>
)
