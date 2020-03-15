import React from 'react'

export default ({ children }) => (
  <h2
    className={`
    leading-snug
    md:mb-12
    text-2xl
    md:text-4xl
    font-medium
  `}
  >
    {children}
  </h2>
)
