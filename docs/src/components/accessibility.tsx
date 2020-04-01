import Heading from './heading'
import React from 'react'

export default () => (
  <div className="max-w-xl text-center">
    <Heading title="Accessibility" />
    <p className="sm:text-lg leading-loose mb-8 text-left">
      It is recommended to have a tap/click area of at least{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">48x48</span> pixels.
      Therefore, padding will be added around the icon to create a surface of
      exactly this size.
    </p>
    <p className="sm:text-lg leading-loose text-left">
      Keyboard interaction is provided with the{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">enter</span> key, and the
      icon element has the recommended accessibility attributes (such as{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">role</span>).
    </p>
  </div>
)
