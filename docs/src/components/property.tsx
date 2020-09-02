import React from 'react'

export default ({
  name,
  initial,
  type,
  margin,
}: {
  name: string
  initial: string
  type: string
  margin?: boolean
}) => (
  <div
    className={`
    ${margin ? 'mt-6 sm:mt-0' : ''}
    flex
    flex-col
    sm:flex-row
    mb-2
    md:mb-0
    sm:items-center
    sm:h-12
  `}
  >
    <div className="flex">
      <div
        className="
        border-b-2
        border-t-2
        border-l-2
        bg-purple-900
        border-purple-600
        rounded
        h-8
        sm:h-10
        flex
        items-center
        justify-center
        w-2/5
        sm:w-32
        text-sm
        md:text-base
        rounded-tr-none
        rounded-br-none
        font-medium
        border-solid
      "
      >
        {name}
      </div>
      <div
        className="
        border-2
        rounded-tl-none
        rounded-bl-none
        border-purple-600
        rounded
        text-xs
        h-8
        sm:h-10
        flex
        items-center
        justify-center
        text-center
        sm:mr-6
        w-3/5
        sm:w-48
        border-solid
      "
      >
        {initial}
      </div>
    </div>
    <div className="flex items-baseline flex-grow sm:justify-end">
      <div className="font-medium text-gray-500 mt-4 sm:mt-0 mr-2">Type:</div>
      <div
        className={`
        font-medium
        sm:text-lg
      `}
      >
        {type}
      </div>
    </div>
  </div>
)
