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
      Defaults
    </h2>
    <code
      className="
        w-full
        max-w-xl
        px-8
        py-6
        text-lg
        rounded-lg
        bg-indigo-800
        shadow-inner
      "
    >
      <div>
        {'<'}
        <span className="text-yellow-400">Hamburger</span>
      </div>

      <div className="flex items-center">
        &nbsp;&nbsp;
        <span className="text-purple-400">color</span>
        ="
        <span className="text-green-400">{'#'}000</span>"
        <span className="hidden md:inline text-sm text-indigo-400">
          &nbsp;// line color
        </span>
      </div>

      <div className="flex items-center">
        &nbsp;&nbsp;
        <span className="text-purple-400">direction</span>
        ="
        <span className="text-green-400">left</span>"
        <span className="hidden md:inline text-sm text-indigo-400">
          &nbsp;// animation direction
        </span>
      </div>

      <div className="flex items-center">
        &nbsp;&nbsp;
        <span className="text-purple-400">rounded</span>={'{'}
        <span className="text-green-400">false</span>
        {'}'}
        <span className="hidden md:inline text-sm text-indigo-400">
          &nbsp;// round line corners
        </span>
      </div>

      <div className="flex items-center">
        &nbsp;&nbsp;
        <span className="text-purple-400">size</span>={'{'}
        <span className="text-green-400">32</span>
        {'}'}
        <span className="hidden md:inline text-sm text-indigo-400">
          &nbsp;// a size between 12 and 48
        </span>
      </div>

      <div className="flex items-center">
        &nbsp;&nbsp;
        <span className="text-purple-400">onToggle</span>={'{'}
        <span className="text-green-400">null</span>
        {'}'}
        <span className="hidden md:inline text-sm text-indigo-400">
          &nbsp;// callback
        </span>
      </div>

      <div>{'/>'}</div>
    </code>
  </>
)
