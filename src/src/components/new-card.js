import React from 'react'

export default ({ children, title }) => (
  <div
    className={`
      bg-gray-800
      rounded-lg
      shadow-xl
      pt-6
      pb-8
      px-8
      lg:px-12
      flex
      mb-0
      flex-col
      relative
      items-center
    `}
  >
    <h2 className="mb-2 leading-snug text-center font-semibold flex items-center">
      <span className="text-l mr-2 text-gray-400">Hamburger type:</span>
      <span className="text-xl">{title}</span>
    </h2>
    <div className="flex w-full items-center">
      <div
        className="
          bg-teal-700
          absolute
          leading-loose
          left-0
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
        <span role="img" aria-label="Sparkles">✨</span>
        <span className="font-semibold text-sm">New!</span>
        <span role="img" aria-label="Sparkles">✨</span>
      </div>
      <div
        className="
          flex
          flex-col
          items-center
          md:border-r-2
          md:border-gray-700
          md:pr-8
          md:mr-8
          md:pl-20
          lg:pr-12
          lg:mr-12
          lg:pl-24
          flex-shrink-0
        "
      >
        <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
          Direction: n / a
        </h3>
        {children[0]}
      </div>
      <code
        className="
          text-blue-300
          flex
          flex-grow
          justify-center
          text-xs
          px-6
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
