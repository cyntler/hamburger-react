import React from 'react'

export default () => (
  <div className="max-w-xl">
    <h2
      className="
        leading-snug
        md:mb-12
        text-2xl
        md:text-4xl
        font-medium
        text-center
      "
    >
      Accessibility
    </h2>
    <p className="text-lg leading-loose mb-8">
      It is recommended to have a tap/click area of at least{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">48x48</span> pixels.
      Therefore, padding will be added around the icon to create a surface of
      exactly this size.
    </p>
    <p className="text-lg leading-loose">
      Keyboard interaction is provided with the{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">enter</span> key, and the
      icon element has the recommended accessibility attributes (such as{' '}
      <span className="bg-gray-800 px-2 py-1 rounded">role</span>).
    </p>
  </div>
)
