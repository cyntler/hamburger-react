import Heading from './heading'
import React from 'react'

export default () => (
  <>
    <Heading>Installation</Heading>
    <code
      className="
        w-full
        max-w-md
        px-6
        sm:px-8
        py-4
        sm:py-6
        sm:text-lg
        rounded-lg
        bg-indigo-800
        shadow-inner
        text-center
      "
    >
      <span className="select-none text-blue-300 mr-2 sm:mr-4">$</span>npm install
      hamburger-react
    </code>
  </>
)
