import React from 'react'

export default ({ title }: { title: string }) => (
  <h2
    className="
    leading-snug
    mb-8
    sm:mb-10
    lg:mb-12
    text-2xl
    sm:text-3xl
    lg:text-4xl
    font-medium
  "
  >
    {title}
  </h2>
)
