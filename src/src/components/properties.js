import React from 'react'

export default () => (
  <>
    <h2
      className="
        leading-snug
        md:mb-8
        text-2xl
        md:text-3xl
        font-medium
      "
    >
      Properties
    </h2>

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
        color
      </div>
      <div className="font-medium text-gray-500 mr-2">Type:</div>
      <div className="font-medium text-lg">string</div>
    </div>

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
          mb-2
          mr-6
          font-medium border-solid
        "
      >
        direction
      </div>
      <div className="font-medium text-gray-500 mr-2">Type:</div>
      <div className="font-medium text-lg">string</div>
    </div>

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
          mb-2
          mr-6
          font-medium border-solid
        "
      >
        rounded
      </div>
      <div className="font-medium text-gray-500 mr-2">Type:</div>
      <div className="font-medium text-lg">boolean</div>
    </div>

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
          mb-2
          text-center
          mr-6
          font-medium border-solid
        "
      >
        size
      </div>
      <div className="font-medium text-gray-500 mr-2">Type:</div>
      <div className="font-medium text-lg">integer</div>
    </div>

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
          mb-2
          text-center
          mr-6
          font-medium border-solid
        "
      >
        onToggle
      </div>
      <div className="font-medium text-gray-500 mr-2">Type:</div>
      <div className="font-medium text-lg">function</div>
    </div>
  </>
)
