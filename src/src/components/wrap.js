import React from 'react'

export default ({ children, wide }) => (
  <div
    className={`
    mx-auto
    px-5
    sm:px-10
    max-w-screen-${wide ? 'xl' : 'lg'}
    flex
    items-center
    flex-col
  `}
  >
    {children}
  </div>
)
