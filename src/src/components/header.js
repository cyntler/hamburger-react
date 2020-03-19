import Menu from './menu'
import React from 'react'

export default () => (
  <div className="w-full">
    <div>
      <h1
        className="
          leading-snug
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-medium
        "
      >
        Animated hamburger icons
        <span
          className="hidden sm:inline ml-4"
          role="img"
          aria-label="Hamburger"
        >
          🍔
        </span>
      </h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-500">
        Made for React
      </h3>
    </div>

    <Menu />
  </div>
)
