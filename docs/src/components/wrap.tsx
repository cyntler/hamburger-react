import React from 'react'

export default ({ children, wide = false }) => (
  <div
    className={`
    mx-auto
    px-5
    sm:px-10
    ${wide ? 'max-w-screen-xl' : 'max-w-screen-lg'}
    flex
    items-center
    flex-col
  `}
  >
    {children}
  </div>
);
