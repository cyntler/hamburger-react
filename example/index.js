import React from 'react'
import ReactDOM from 'react-dom'
import Hamburger from '../src'
import { Fade } from '../src'

const Main = () => (
  <>
    <Card title="Tilt" subtitle="Direction: left">
      <Hamburger size={36} color="white" />
      <div>&lt;Hamburger /&gt;</div>
    </Card>
    <Card title="Tilt" subtitle="Direction: right">
      <Hamburger size={36} color="white" direction="right" />
      <>
        <div>&lt;Hamburger</div>
        <div>&nbsp;&nbsp;direction="right"</div>
        <div>/&gt;</div>
      </>
    </Card>
    <Card title="Fade" subtitle="Direction: left">
      <Fade size={36} color="white" />
      <>
        <div>&lt;Hamburger</div>
        <div>&nbsp;&nbsp;type="fade"</div>
        <div>/&gt;</div>
      </>
    </Card>
    <Card title="Fade" subtitle="Direction: right">
      <Fade size={36} color="white" direction="right" />
      <>
        <div>&lt;Hamburger</div>
        <div>&nbsp;&nbsp;type="fade"</div>
        <div>&nbsp;&nbsp;direction="right"</div>
        <div>/&gt;</div>
      </>
    </Card>
  </>
)

const Card = ({ children, title, subtitle, code }) => (
  <div className="
    bg-gray-800
    rounded-lg
    shadow-xl
    py-8
    px-8
    md:px-12
    flex
    flex-col
    xl:flex-row
    items-center
  ">
    <div className="
      flex
      flex-col
      items-center
      xl:border-r-2
      xl:border-gray-700
      xl:pr-12
      xl:mr-12
      mb-6
      xl:mb-0
    ">
      <h2 className="leading-snug text-center text-xl font-semibold">{title}</h2>
      <h3 className="leading-snug text-center text-gray-600 mb-4 text-sm">{subtitle}</h3>
      {children[0]}
    </div>
    <code className="
      text-indigo-100
      w-full
      xl:w-64
      max-w-xs
      flex
      justify-center
      text-sm
      px-6
      py-4
      rounded
      bg-indigo-800
      shadow-inner
    ">
      <div>{children[1]}</div>
    </code>
  </div>
)

ReactDOM.render(<Main />, document.querySelector('.main'))
