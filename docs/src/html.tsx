import React from 'react'

export default (props: {
  body: string
  headComponents: React.ReactNode
  postBodyComponents: React.ReactNode
  preBodyComponents: React.ReactNode
}) => (
  <html lang="en" className="antialiased">
    <head>
      <title>Animated hamburger menu icons for React 🍔</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Hamburger icons with CSS-driven transitions, created to be as elegant and performant as possible. (1.5 KB)"
      />
      <meta
        property="og:description"
        content="Hamburger icons with CSS-driven transitions, created to be as elegant and performant as possible. (1.5 KB)"
      />
      <meta
        property="og:image:secure_url"
        content="https://hamburger-react.netlify.com/hamburger-react.jpg"
      />
      <meta
        property="og:image"
        content="https://hamburger-react.netlify.com/hamburger-react.jpg"
      />
      <meta
        property="og:title"
        content="Animated hamburger menu icons for React 🍔"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hamburger-react.netlify.com" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {process.env.NODE_ENV !== 'development' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', '${process.env.GATSBY_ANALYTICS_ID}', 'auto');
            ga('send', 'pageview');
        `,
          }}
        />
      )}
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
