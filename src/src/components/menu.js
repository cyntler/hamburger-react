import React from 'react'

export default () => (
  <div className="hidden md:flex -mr-4 font-medium">
    <Anchor label="Installation" to="installation" />
    <Anchor label="Properties" to="properties" />
  </div>
)

const Anchor = ({ label, to }) => {
  const clickHandler = to =>
    typeof document !== 'undefined' &&
    document.getElementById(to).scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className="underline py-4 px-4 outline-none"
      role="button"
      onKeyUp={e => (e.key === 13 || e.keyCode === 13) && clickHandler(to)}
      tabIndex="0"
      onClick={() => clickHandler(to)}
    >
      {label}
    </div>
  )
}
