import React from 'react'

export default () => (
  <div>
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
      className=""
      role="button"
      onKeyUp={e => (e.key === 13 || e.keyCode === 13) && clickHandler(to)}
      tabIndex="0"
      onClick={() => clickHandler(to)}
    >
      {label}
    </div>
  )
}
