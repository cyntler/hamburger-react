import Cards from '../components/cards'
import React from 'react'

export default () => (
  <>
    <Cards />
    <div className="bg-gray-800 pt-8 md:pt-16 pb-16 md:pb-32">
      <div className="mx-auto px-5 md:px-10 max-w-screen-lg md:mb-16">
        <div className="flex items-center flex-col">
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
        </div>
      </div>

      <div className="mx-auto px-5 md:px-10 max-w-screen-lg">
        <div className="flex items-center flex-col">
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
              <span className="text-green-400">#000</span>"
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
        </div>
      </div>
    </div>
  </>
)
