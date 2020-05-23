import Heading from './heading'
import React from 'react'

export default () => (
  <>
    <Heading title="Installation" />
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
        mb-8
      "
    >
      <span className="select-none text-blue-300 mr-2 sm:mr-4">$</span>npm
      install hamburger-react
    </code>
    <p className="sm:text-lg leading-loose text-center">When using one hamburger, ~1.5 KB will be added to your bundle (min + gzip).</p>
  </>
)
