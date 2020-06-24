import React from 'react'

export default () => (
  <div className="w-full flex flex-col sm:flex-row justify-between text-sm text-gray-500">
    <p className="text-center sm:text-left mb-6 sm:mb-0">
      hamburger-react is a project by{' '}
      <a
        className="underline font-semibold hover:text-purple-400 transition-colors duration-300"
        href="https://www.luuk.site"
        target="_blank"
        rel="noopener"
      >
        Luuk
      </a>
      . Logo by{' '}
      <a
        className="underline font-semibold hover:text-purple-400 transition-colors duration-300"
        href="https://www.stutpak.nl"
        target="_blank"
        rel="noopener"
      >
        Stutpak
      </a>
      .
    </p>
    <div className="flex justify-center">
      <a
        className="underline font-semibold px-4 hover:text-purple-400 transition-colors duration-300"
        href="https://www.npmjs.com/package/hamburger-react"
        target="_blank"
        rel="noopener"
      >
        NPM
      </a>
      <a
        className="underline font-semibold px-4 hover:text-purple-400 transition-colors duration-300"
        href="https://yarnpkg.com/package/hamburger-react"
        target="_blank"
        rel="noopener"
      >
        Yarn
      </a>
      <a
        className="underline font-semibold px-4 hover:text-purple-400 transition-colors duration-300"
        href="https://github.com/luukdv/hamburger-react"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
      <a
        className="underline font-semibold px-4 hover:text-purple-400 transition-colors duration-300"
        href="https://www.luuk.site"
        target="_blank"
        rel="noopener"
      >
        Contact
      </a>
    </div>
  </div>
)
