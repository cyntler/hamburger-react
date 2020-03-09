import React from 'react'
import ReactDOM from 'react-dom'
import { Hamburger } from '../src'

const Main = () => (
  <>
    <Card title="Default" subtitle="Direction: left">
      <Hamburger color="white" />
      {'<Hamburger />'}
    </Card>
    <Card title="Default" subtitle="Direction: right">
      <Hamburger color="white" direction="right" />
      <>
        <div>{'<Hamburger'}</div>
        <div className="ml-4">direction="right"</div>
        <div>{'/>'}</div>
      </>
    </Card>
  </>
)

const Card = ({ children, title, subtitle, code }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl py-8 px-12 flex items-center">
    <div className="flex flex-col items-center border-r-2 border-gray-700 pr-12 mr-12">
      <h2 className="leading-snug text-center text-xl font-semibold">{title}</h2>
      <h3 className="leading-snug text-center text-gray-600 mb-4 text-sm">{subtitle}</h3>
      {children[0]}
    </div>
    <code className="text-sm px-6 py-4 rounded bg-indigo-800 shadow-inner">
    {children[1]}
    </code>
  </div>
)

ReactDOM.render(<Main />, document.querySelector('.main'))
