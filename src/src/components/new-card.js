import React from 'react'

export default ({ children, title }) => (
  <div
    className={`
      bg-gray-800
      rounded-lg
      shadow-xl
      pt-6
      pb-8
      px-6
      sm:px-8
      lg:px-12
      flex
      mb-0
      relative
      flex-col
      items-center
    `}
  >
    <h2 className="mb-2 leading-snug text-center font-semibold flex items-center">
      <span className="text-l mr-2 text-gray-400">Hamburger type:</span>
      <span className="text-xl">{title}</span>
    </h2>
    <div className="flex w-full items-center flex-col md:flex-row">
      <div
        className="
          bg-teal-700
          absolute
          leading-loose
          left-0
          hidden
          md:flex
          top-0
          h-full
          w-24
          rounded-l-lg
          flex
          items-center
          justify-center
          flex-col
        "
      >
        <span role="img" aria-label="Sparkles">
          ✨
        </span>
        <span className="font-semibold text-sm">New!</span>
        <span role="img" aria-label="Sparkles">
          ✨
        </span>
      </div>
      <div
        className="
          flex
          md:flex-col
          items-center
          md:border-r-2
          md:border-gray-700
          mb-2
          md:mb-0
          md:pr-8
          lg:pr-12
          md:mr-8
          lg:mr-12
          md:pl-24
          flex-shrink-0
        "
      >
        <h3
          className="
          order-1
          ml-2
          md:ml-0
          md:order-none
          leading-snug
          text-center
          text-gray-500
          font-semibold
          md:mb-2
          text-sm
          "
        >
          Direction: n / a
        </h3>
        {children[0]}
      </div>
      <code
        className="
          text-blue-300
          flex
          text-center
          flex-grow
          justify-center
          text-xs
          px-4
          sm:px-6
          py-4
          rounded
          bg-indigo-800
          shadow-inner
        "
      >
        {children[1]}
      </code>
    </div>
  </div>
)
