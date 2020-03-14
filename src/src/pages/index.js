import Cards from '../components/cards'
import Properties from '../components/properties'
import Defaults from '../components/defaults'
import Wrap from '../components/wrap'
import React from 'react'

export default () => (
  <>
    <div className="mt-12 md:mt-24 mb-16 md:mb-32">
      <Wrap>
        <Cards />
      </Wrap>
    </div>

    <div className="bg-gray-800 py-8 md:py-16 mb-12 md:mb-24">
      <Wrap>
        <Properties />
      </Wrap>
    </div>

    <div className="mb-16 md:mb-32">
      <Wrap>
        <Defaults />
      </Wrap>
    </div>
  </>
)
