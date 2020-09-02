import Example from '../components/example'
import Hamburger from 'hamburger-react'
import Heading from './heading'
import Property from '../components/property'
import React, { useState } from 'react'

export default () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Heading title="Properties & examples" />

      <div className="w-full max-w-2xl">
        <Example>
          <div>
            <Property name="toggled" initial="undefined" type="boolean" />
            <Property
              name="toggle"
              initial="undefined"
              type="function"
              margin
            />
          </div>
          <Hamburger size={34} toggled={isOpen} toggle={setOpen} />A way to
          provide your own state.
          <div>
            <span className="text-purple-400">const</span>
            &nbsp;
            <span className="text-blue-300">[</span>
            isOpen
            <span className="text-blue-300">,</span>
            &nbsp;setOpen
            <span className="text-blue-300">] =</span>
            &nbsp;
            <span className="text-blue-400">useState</span>
            <span className="text-red-400">(</span>
            <span className="text-red-300">false</span>
            <span className="text-red-400">)</span>
            <br />
            <br />
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">toggled</span>={'{'}
            <span className="text-green-400">isOpen</span>
            {'}'}
            &nbsp;
            <span className="text-purple-400">toggle</span>={'{'}
            <span className="text-green-400">setOpen</span>
            {'} />'}
          </div>
        </Example>

        <Example>
          <Property name="size" initial="32" type="integer" />
          <Hamburger size={20} />A number between 12 and 48, which sets the size
          of the icon.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">size</span>={'{'}
            <span className="text-green-400">20</span>
            {'} />'}
          </div>
        </Example>

        <Example>
          <Property name="direction" initial="left" type="string" />
          <Hamburger direction="right" size={26} />
          The animation direction of the icon, left or right.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">direction</span>="
            <span className="text-green-400">right</span>
            {'" />'}
          </div>
        </Example>

        <Example>
          <Property name="duration" initial="0.4" type="float / integer" />
          <Hamburger duration={0.8} size={26} />
          The duration of the animation. Can be set to zero if no animation is
          desired.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">duration</span>={'{'}
            <span className="text-green-400">0.8</span>
            {'} />'}
          </div>
        </Example>

        <Example>
          <Property name="distance" initial="md" type="string" />
          <Hamburger distance="lg" size={32} />
          The vertical distance between the lines. Small (sm), medium (md) or
          large (lg).
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">distance</span>="
            <span className="text-green-400">lg</span>
            {'" />'}
          </div>
        </Example>

        <Example>
          <Property name="color" initial="currentColor" type="string" />
          <Hamburger color="#4FD1C5" size={34} />
          The color of the icon bars, accepts any CSS-parsable value.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">color</span>="
            <span className="text-green-400">#4FD1C5</span>
            {'" />'}
          </div>
        </Example>

        <Example>
          <Property
            name="easing"
            initial="cubic-bezier(0, 0, 0, 1)"
            type="string"
          />
          <Hamburger easing="ease-out" size={26} />A valid
          `transition-timing-function` CSS value.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">easing</span>="
            <span className="text-green-400">ease-out</span>
            {'" />'}
          </div>
        </Example>

        <Example>
          <Property name="onToggle" initial="undefined" type="function" />
          <Hamburger
            size={36}
            onToggle={(toggled) =>
              console.log('🍔 [hamburger-react] toggled:', toggled)
            }
          />
          A callback which receives a single boolean argument, indicating if the
          icon is toggled. This can be used to perform an action after toggling,
          or as an alternative to providing your own state. Inspect your browser
          console after tapping/clicking the example above.
          <>
            <div>
              {'<'}
              <span className="text-yellow-400">Hamburger</span>&nbsp;
              <span className="text-purple-400">onToggle</span>={'{'}
              <span className="text-orange-400">toggled</span>
              &nbsp;{'=> {'}
            </div>
            <div>
              &nbsp;&nbsp;if (<span className="text-orange-400">toggled</span>){' '}
              {'{'}
            </div>

            <div className="text-indigo-400">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// open a menu
            </div>
            <div>
              &nbsp;&nbsp;{'}'} else {'{'}
            </div>
            <div className="text-indigo-400">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// close a menu
            </div>
            <div>&nbsp;&nbsp;{'}'}</div>
            <div>{'}} />'}</div>
          </>
        </Example>

        <Example>
          <Property name="rounded" initial="false" type="boolean" />
          <Hamburger rounded size={42} />
          Specifies if the icon bars should be rounded.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">rounded</span>
            {' />'}
          </div>
        </Example>

        <Example>
          <Property name="label" initial="undefined" type="string" />
          <Hamburger color="white" label="Show menu" size={26} />
          An ARIA label to improve accessibility.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">label</span>="
            <span className="text-green-400">Show menu</span>
            {'" />'}
          </div>
        </Example>

        <Example last>
          <Property name="hideOutline" initial="true" type="boolean" />
          <Hamburger hideOutline={false} size={30} />
          Hides the default browser focus style.
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">hideOutline</span>={'{'}
            <span className="text-green-400">false</span>
            {'} />'}
          </div>
        </Example>
      </div>
    </>
  )
}
