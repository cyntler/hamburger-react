import React from 'react'

export default () => (
  <div className="hidden md:flex -mr-4 lg:-mr-6 font-medium text-lg">
    <Anchor label="Installation" to="installation" />
    <Anchor label="Properties" to="properties" />
    <Anchor label="Examples" to="properties" largeOnly />
  </div>
)

const Anchor = ({ label, to, largeOnly }) => {
  const clickHandler = (to) =>
    typeof document !== 'undefined' &&
    document.getElementById(to).scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className={`
        underline
        ${largeOnly && 'hidden lg:block'}
        py-4
        px-4
        lg:px-6
        outline-none
      `}
      role="button"
      onKeyUp={(e) => (e.key === 13 || e.keyCode === 13) && clickHandler(to)}
      tabIndex="0"
      onClick={() => clickHandler(to)}
    >
      {label}
    </div>
  )
}
