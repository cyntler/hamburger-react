import Heading from './heading'
import React from 'react'

export default () => (
  <div className="max-w-xl text-center">
    <Heading>More information</Heading>
    <p className="text-lg leading-loose">
      Visit the{' '}
      <a
        className="underline font-medium text-purple-400"
        href="https://github.com/luukdv/hamburger-react"
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        GitHub repository
      </a>{' '}
      for additional information about usage and the motivation behind this
      package.
    </p>
  </div>
)
