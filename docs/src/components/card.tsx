import React from 'react'

export default ({
  children,
  title,
}: {
  children: [React.ReactNode, React.ReactNode, React.ReactNode]
  title: string
}) => (
  <div
    className="
      bg-gray-800
      rounded-lg
      shadow-xl
      pt-6
      pb-6
      md:pb-8
      px-6
      sm:px-8
      lg:px-12
      flex
      mb-4
      md:mb-6
      flex-col
      items-center
  "
  >
    <h2 className="mb-2 leading-snug text-center font-semibold flex items-center">
      <span className="text-l mr-2 text-gray-400">Hamburger type:</span>
      <span className="text-xl">{title}</span>
    </h2>
    <div className="flex w-full items-center flex-col md:flex-row">
      <div
        className="
        hidden
        md:flex
        md:flex-col
        items-center
        md:border-r-2
        md:border-gray-700
        md:pr-8
        md:mr-8
        lg:pr-12
        lg:mr-12
        flex-shrink-0
      "
      >
        <h3
          className="
          leading-snug
          text-gray-500
          font-semibold
          md:mb-2
          text-sm
          "
        >
          Direction: right
        </h3>
        {children[0]}
      </div>
      <code
        className="
        text-blue-300
        flex-grow
        text-center
        text-center
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
      <div
        className="
        mb-2
        md:mb-0
        order-first
        md:order-none
        flex
        md:flex-col
        items-center
        md:border-l-2
        md:border-gray-700
        md:pl-8
        md:ml-8
        lg:pl-12
        lg:ml-12
        flex-shrink-0
      "
      >
        <h3
          className="
          leading-snug
          text-gray-500
          order-1
          md:order-none
          ml-4
          md:ml-0
          font-semibold
          md:mb-2
          text-sm
          "
        >
          Direction: left
        </h3>
        {children[2]}
      </div>
    </div>
  </div>
)
