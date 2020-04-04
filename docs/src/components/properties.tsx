import Example from '../components/example'
import Hamburger from '../../../src'
import Heading from './heading'
import Property from '../components/property'
import React, { useState } from 'react'

export default () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <>
      <Heading title="Properties & examples" />

      <div className="w-full max-w-xl">
        <Example>
          <Property name="color" initial="#000" type="string" />
          <Hamburger color="#4FD1C5" size={34} />
          The color of the icon bars, accepts any CSS-parsable argument.
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
          <Property name="direction" initial="left" type="string" />
          <Hamburger color="white" direction="right" size={30} />
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
          <Property
            name="duration"
            initial="0.4"
            type="float / integer"
            smallType="float / int"
          />
          <Hamburger color="white" duration={0.8} size={26} />
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
          <Property name="hideOutline" initial="true" type="boolean" />
          <Hamburger color="white" hideOutline={false} size={30} />
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

        <Example>
          <Property name="rounded" initial="false" type="boolean" />
          <Hamburger color="white" rounded size={42} />
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
          <Property name="size" initial="32" type="integer" />
          <Hamburger color="white" size={20} />A number between 12 and 48, which
          sets the size of the icon.
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
          <div>
            <Property name="toggled" initial="undefined" type="boolean" />
            <Property name="toggle" initial="undefined" type="function" />
          </div>
          <Hamburger
            color="white"
            size={34}
            toggled={isOpen}
            toggle={setOpen}
          />
          A way to provide your own state.
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
            <span className="text-red-300">true</span>
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

        <Example last>
          <Property name="onToggle" initial="undefined" type="function" />
          <Hamburger
            color="white"
            size={26}
            onToggle={(toggled) =>
              console.log('🍔 [hamburger-react] toggled:', toggled)
            }
          />
          A callback which receives a single boolean argument, indicating if the
          icon is toggled. Inspect your browser console after tapping/clicking
          the example above.
          <>
            <div>
              {'<'}
              <span className="text-yellow-400">Hamburger</span>&nbsp;
              <span className="text-purple-400">onToggle</span>={'{'}
              <span className="text-orange-400">toggled</span>
              &nbsp;=>{' {'}
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
      </div>
    </>
  )
}
