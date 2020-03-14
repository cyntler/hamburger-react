import Property from '../components/property'
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

    <Property name="color" type="string" />
    <Property name="direction" type="string" />
    <Property name="rounded" type="boolean" />
    <Property name="size" type="integer" />
    <Property name="onToggle" type="function" />
  </>
)
