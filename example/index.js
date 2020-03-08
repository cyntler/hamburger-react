import React from 'react'
import ReactDOM from 'react-dom'
import { Hamburger } from '../src'

const App = () => (
  <div className="rounded-lg shadow-xl p-8 px-12 bg-white">
    <h2 className="leading-snug text-center mb-6 text-xl font-medium">Default</h2>
    <div className="bg-gray-800 rounded shadow-lg p-8 px-12 -mb-16">
      <Hamburger color="white" />
    </div>
  </div>
)

ReactDOM.render(<App />, document.querySelector('.main'))
