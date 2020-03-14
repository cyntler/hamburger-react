import React from 'react'

export default ({ name, initial, type }) => (
  <div
    className={`
    flex
    items-baseline
  `}
  >
    <div className="flex">
      <div
        className={`
        border-b-2
        border-t-2
        border-l-2
        bg-purple-900
        border-purple-600
        rounded
        h-10
        flex
        items-center
        justify-center
        w-24
        rounded-tr-none
        rounded-br-none
        font-medium
        border-solid
      `}
      >
        {name}
      </div>
      <div
        className={`
        border-2
        rounded-tl-none
        rounded-bl-none
        border-purple-600
        rounded
        text-xs
        h-10
        flex
        items-center
        justify-center
        text-center
        mr-6
        w-16
        border-solid
      `}
      >
        {initial}
      </div>
    </div>
    <div className="font-medium text-gray-500 mr-2">Type:</div>
    <div className="font-medium text-lg">{type}</div>
  </div>
)
