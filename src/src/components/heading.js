import React from 'react'

export default ({ children }) => (
  <h2
    className={`
    leading-snug
    mb-6
    sm:mb-8
    lg:mb-12
    text-2xl
    sm:text-3xl
    lg:text-4xl
    font-medium
  `}
  >
    {children}
  </h2>
)
