import Property from '../components/property'
import Hamburger from '../../lib'
import Example from '../components/example'
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

    <div>
      <Example>
        <Property name="color" type="string" />
        <Hamburger color="white" size={28} />
      </Example>
      <Example>
        <Property name="direction" type="string" />
        <Hamburger color="white" size={28} />
      </Example>
      <Example>
        <Property name="rounded" type="boolean" />
        <Hamburger color="white" size={28} />
      </Example>
      <Example>
        <Property name="size" type="integer" />
        <Hamburger color="white" size={28} />
      </Example>
      <Example last>
        <Property name="onToggle" type="function" />
        <Hamburger color="white" size={28} />
      </Example>
    </div>
  </>
)
