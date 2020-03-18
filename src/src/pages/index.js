import Accessibility from '../components/accessibility'
import Cards from '../components/cards'
import Footer from '../components/footer'
import Information from '../components/information'
import Installation from '../components/installation'
import Properties from '../components/properties'
import React from 'react'
import Title from '../components/title'
import Wrap from '../components/wrap'

export default () => (
  <>
    <div className="mt-12 sm:mt-20 lg:mt-24 mb-12 sm:mb-20 lg:mb-24">
      <Wrap>
        <Title />
        <Cards />
      </Wrap>
    </div>

    <div className="mb-12 sm:mb-20 lg:mb-24">
      <Wrap>
        <Installation />
      </Wrap>
    </div>

    <div
      className="
      bg-gray-800
      pt-10
      sm:pt-16
      lg:pt-20
      pb-12
      sm:pb-20
      lg:pb-24
      mb-10
      sm:mb-16
      lg:mb-20
    "
    >
      <Wrap>
        <Properties />
      </Wrap>
    </div>

    <div className="mb-12 sm:mb-20 lg:mb-24">
      <Wrap>
        <Accessibility />
      </Wrap>
    </div>

    <div className="bg-gray-800 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-20 lg:pb-24">
      <Wrap>
        <Information />
      </Wrap>
    </div>

    <div className="bg-gray-700 pt-6 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16">
      <Wrap>
        <Footer />
      </Wrap>
    </div>
  </>
)
