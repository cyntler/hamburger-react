import React from 'react'
import Wrap from '../components/wrap'

export default () => (
  <Wrap>
    <div className="flex h-screen items-center">
      <h1
        className="
          leading-snug
          text-5xl
          mb-8
          sm:mb-16
          lg:mb-32
          font-medium
          text-center
        "
      >
        404
        <span className="ml-4" role="img" aria-label="Shrug">
          🤷‍♂️
        </span>
      </h1>
    </div>
  </Wrap>
)
