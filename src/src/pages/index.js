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
    <div className="sm:mt-24 mb-16 sm:mb-24">
      <Wrap>
        <Title />
        <Cards />
      </Wrap>
    </div>

    <div className="mb-16 sm:mb-24">
      <Wrap>
        <Installation />
      </Wrap>
    </div>

    <div className="bg-gray-800 sm:pt-20 sm:pb-24 mb-10 sm:mb-20">
      <Wrap>
        <Properties />
      </Wrap>
    </div>

    <div className="mb-16 sm:mb-24">
      <Wrap>
        <Accessibility />
      </Wrap>
    </div>

    <div className="bg-gray-800 sm:pt-20 sm:pb-24">
      <Wrap>
        <Information />
      </Wrap>
    </div>

    <div className="bg-gray-700 sm:pt-12 sm:pb-16">
      <Wrap>
        <Footer />
      </Wrap>
    </div>
  </>
)
