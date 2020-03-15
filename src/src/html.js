import React from 'react'

export default props => (
  <html lang="en" className="antialiased">
    <head>
      <title>Animated hamburger icons for React 🍔</title>
      <meta name="description" content="Hamburger icons with CSS-driven transitions, created to be as elegant and performant as possible." />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      {props.headComponents}
    </head>
    <body className="bg-gray-900 text-white">
      {props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)
