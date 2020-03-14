import { Fade } from '../../lib'
import { Sling } from '../../lib'
import { Spiral } from '../../lib'
import { Turn } from '../../lib'
import { Twirl } from '../../lib'
import { Squash } from '../../lib'
import Hamburger from '../../lib'
import React from 'react'

export default () => (
  <>
    <div className="mx-auto mt-12 md:mt-24 mb-16 md:mb-32 px-5 md:px-10 max-w-screen-lg">
      <div className="flex items-center flex-col">
        <h1
          className="
      leading-snug
      mb-12
      md:mb-24
      text-2xl
      md:text-3xl
      lg:text-4xl
      font-medium
      text-center
    "
        >
          Animated hamburger icons for React&nbsp;&nbsp;🍔
        </h1>
        <div className="w-full">
          <Card title="Tilt">
            <Hamburger size={36} color="white" direction="right" />
            <div>
              Import
              <span className="text-white"> Hamburger </span>
              from '<span className="text-green-400">hamburger-react</span>'
            </div>
            <Hamburger size={36} color="white" />
          </Card>

          <Card title="Fade">
            <Fade size={36} color="white" direction="right" />
            <div>
              Import {'{'}
              <span className="text-white"> Fade </span>
              as
              <span className="text-white"> Hamburger </span>
              {'}'} from '
              <span className="text-green-400">hamburger-react</span>'
            </div>
            <Fade size={36} color="white" />
          </Card>

          <Card title="Turn">
            <Turn size={36} color="white" direction="right" />
            <div>
              Import {'{'}
              <span className="text-white"> Turn </span>
              as
              <span className="text-white"> Hamburger </span>
              {'}'} from '
              <span className="text-green-400">hamburger-react</span>'
            </div>
            <Turn size={36} color="white" />
          </Card>

          <Card title="Sling">
            <Sling size={36} color="white" direction="right" />
            <div>
              Import {'{'}
              <span className="text-white"> Sling </span>
              as
              <span className="text-white"> Hamburger </span>
              {'}'} from '
              <span className="text-green-400">hamburger-react</span>'
            </div>
            <Sling size={36} color="white" />
          </Card>

          <Card title="Twirl">
            <Twirl size={36} color="white" direction="right" />
            <div>
              Import {'{'}
              <span className="text-white"> Twirl </span>
              as
              <span className="text-white"> Hamburger </span>
              {'}'} from '
              <span className="text-green-400">hamburger-react</span>'
            </div>
            <Twirl size={36} color="white" />
          </Card>

          <Card title="Spiral">
            <Spiral size={36} color="white" direction="right" />
            <div>
              Import {'{'}
              <span className="text-white"> Spiral </span>
              as
              <span className="text-white"> Hamburger </span>
              {'}'} from '
              <span className="text-green-400">hamburger-react</span>'
            </div>
            <Spiral size={36} color="white" />
          </Card>

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
              <span className="text-xl">Squash</span>
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
                <span>✨</span>
                <span className="font-semibold text-sm">New!</span>
                <span>✨</span>
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
                <Squash size={36} color="white" />
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
                <div>
                  Import {'{'}
                  <span className="text-white"> Squash </span>
                  as
                  <span className="text-white"> Hamburger </span>
                  {'}'} from '
                  <span className="text-green-400">hamburger-react</span>'
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              &lt;<span className="text-yellow-400">Hamburger</span>
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
              <span className="text-purple-400">rounded</span>=
              {<span className="text-green-400">false</span>}
              <span className="hidden md:inline text-sm text-indigo-400">
                &nbsp;// round line corners
              </span>
            </div>

            <div className="flex items-center">
              &nbsp;&nbsp;
              <span className="text-purple-400">size</span>=
              {<span className="text-green-400">32</span>}
              <span className="hidden md:inline text-sm text-indigo-400">
                &nbsp;// a size between 12 and 48
              </span>
            </div>

            <div className="flex items-center">
              &nbsp;&nbsp;
              <span className="text-purple-400">onToggle</span>=
              {<span className="text-green-400">null</span>}
              <span className="hidden md:inline text-sm text-indigo-400">
                &nbsp;// callback
              </span>
            </div>
            <div>/&gt;</div>
          </code>
        </div>
      </div>
    </div>
  </>
)

const Card = ({ children, title }) => (
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
    mb-6
    flex-col
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
        flex
        flex-col
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
        <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
          Direction: right
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
      <div
        className="
        flex
        flex-col
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
        <h3 className="leading-snug text-center text-gray-500 font-semibold mb-2 text-sm">
          Direction: left
        </h3>
        {children[2]}
      </div>
    </div>
  </div>
)
