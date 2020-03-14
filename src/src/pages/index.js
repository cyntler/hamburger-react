import Cards from '../components/cards'
import Properties from '../components/properties'
import Installation from '../components/installation'
import Title from '../components/title'
import Wrap from '../components/wrap'
import React from 'react'

export default () => (
  <>
    <div className="md:mt-24 mb-16 md:mb-24">
      <Wrap>
        <Title />
        <Cards />
      </Wrap>
    </div>

    <div className="mb-16 md:mb-24">
      <Wrap>
        <Installation />
      </Wrap>
    </div>

    <div className="bg-gray-800 md:pt-20 md:pb-24 mb-10 md:mb-20">
      <Wrap>
        <Properties />
      </Wrap>
    </div>

    <div className="mb-16 md:mb-32">
      <Wrap></Wrap>
    </div>
  </>
)
