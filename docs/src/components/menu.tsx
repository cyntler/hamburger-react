import React from 'react'

export default () => (
  <div className="hidden md:flex -mr-4 lg:-mr-6 font-medium text-lg">
    <Anchor label="Installation" to="installation" lgOnly />
    <Anchor label="Properties" to="properties" />
    <Anchor label="Examples" to="properties" xlOnly />
  </div>
)

const Anchor = ({ label, to, lgOnly = false, xlOnly = false }) => {
  const clickHandler = (to) =>
    typeof document !== 'undefined' &&
    document.getElementById(to).scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className={`
        underline
        ${lgOnly && 'hidden lg:block'}
        ${xlOnly && 'hidden xl:block'}
        py-4
        px-4
        lg:px-6
        outline-none
      `}
      role="button"
      onKeyUp={(e) => (e.key === 'Enter' || e.keyCode === 13) && clickHandler(to)}
      tabIndex={0}
      onClick={() => clickHandler(to)}
    >
      {label}
    </div>
  )
}
