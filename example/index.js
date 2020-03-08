import React from 'react'
import ReactDOM from 'react-dom'
import { Hamburger } from '../src'

const App = () => (
  <div className="bg-gray-800 rounded-lg shadow-xl py-8 px-12 flex items-center">
    <div className="flex flex-col items-center border-r-2 border-gray-700 pr-12 mr-12">
      <h2 className="leading-snug text-center text-xl font-semibold">Default</h2>
      <h3 className="leading-snug text-center text-gray-600 mb-4 text-sm">Direction: left</h3>
      <Hamburger color="white" />
    </div>
    <code className="text-sm px-6 py-4 rounded font-bold bg-indigo-800 shadow-inner">
      {'<Hamburger />'}
    </code>
  </div>
)

ReactDOM.render(<App />, document.querySelector('.main'))
