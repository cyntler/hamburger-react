import React from 'react'

export default () => (
  <div className="max-w-xl text-center">
    <h2
      className="
        leading-snug
        md:mb-12
        text-2xl
        md:text-4xl
        font-medium
      "
    >
      More information
    </h2>
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
      for additional information about usage, accessibility and the motivation
      behind this package.
    </p>
  </div>
)
