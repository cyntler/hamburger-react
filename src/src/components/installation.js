import Heading from './heading'
import React from 'react'

export default () => (
  <>
    <Heading>Installation</Heading>
    <code
      className="
        w-full
        max-w-md
        px-8
        py-6
        text-lg
        rounded-lg
        bg-indigo-800
        shadow-inner
      "
    >
      <span className="select-none text-blue-300 mr-4">$</span>npm install
      hamburger-react
    </code>
  </>
)
