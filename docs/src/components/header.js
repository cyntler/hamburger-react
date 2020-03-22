import Menu from './menu'
import React from 'react'

export default () => (
  <div className="w-full flex justify-between items-center text-center sm:text-left">
    <div className="w-full flex items-center flex-col sm:flex-row">
      <div className="mb-4 sm:mb-0 sm:mr-6 w-16 lg:w-20">
        <img
          width="80"
          height="65"
          alt="Logo"
          src="/logo.png"
          srcSet="/logo@2x.png 2x"
        />
      </div>
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
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-500">
          Made for React
        </h3>
      </div>
    </div>

    <Menu />
  </div>
)
