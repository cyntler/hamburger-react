import Property from '../components/property'
import Hamburger from '../../lib'
import Example from '../components/example'
import React from 'react'

export default () => (
  <>
    <h2
      className="
        leading-snug
        md:mb-12
        text-2xl
        md:text-4xl
        font-medium
      "
    >
      Properties
    </h2>

    <div className="w-full max-w-xl">
      <Example>
        <Property name="color" type="string" />
        <Hamburger color="white" size={34} />
      </Example>

      <Example>
        <Property name="direction" type="string" />
        <Hamburger color="white" size={26} />
      </Example>

      <Example>
        <Property name="rounded" type="boolean" />
        <Hamburger color="white" rounded size={42} />
      </Example>

      <Example>
        <Property name="size" type="integer" />
        <Hamburger color="white" size={20} />
        <>
          <div>
            {'<'}
            <span className="text-yellow-400">Hamburger</span>
            &nbsp;
            <span className="text-purple-400">size</span>
            ={'{'}
            <span className="text-green-400">20</span>
            {'} />'}
          </div>
        </>
      </Example>

      <Example last>
        <Property name="onToggle" type="function" />
        <Hamburger color="white" size={30} />
        <>
          <div>{'<'}<span className="text-yellow-400">Hamburger</span></div>

          <div>
            &nbsp;&nbsp;
            <span className="text-purple-400">onToggle</span>
            ={'{'}
            <span className="text-orange-400">toggled</span>
            &nbsp;=>{' {'}
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;if (
            <span className="text-orange-400">toggled</span>
            ) {'{'}
          </div>

          <div className="text-indigo-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// open a menu
          </div>

          <div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}</div>

          <div className="text-indigo-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// close a menu
          </div>

          <div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>

          <div>&nbsp;&nbsp;{'}'}</div>

          <div>{'/>'}</div>
        </>
      </Example>
    </div>
  </>
)
