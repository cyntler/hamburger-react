import Cards from '../components/cards'
import Properties from '../components/properties'
import Defaults from '../components/defaults'
import React from 'react'

export default () => (
  <>
    <div className="mx-auto mt-12 md:mt-24 mb-16 md:mb-32 px-5 md:px-10 max-w-screen-lg">
      <div className="flex items-center flex-col">
        <Cards />
      </div>
    </div>

    <div className="bg-gray-800 pt-8 md:pt-16 pb-16 md:pb-32">
      <div className="mx-auto px-5 md:px-10 max-w-screen-lg md:mb-16">
        <div className="flex items-center flex-col">
          <Properties />
        </div>
      </div>

      <div className="mx-auto px-5 md:px-10 max-w-screen-lg">
        <div className="flex items-center flex-col">
          <Defaults />
        </div>
      </div>
    </div>
  </>
)
