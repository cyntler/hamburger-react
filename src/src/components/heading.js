import React from 'react'

export default ({ children }) => (
  <h2
    className={`
    leading-snug
    sm:mb-12
    text-2xl
    sm:text-4xl
    font-medium
  `}
  >
    {children}
  </h2>
)
