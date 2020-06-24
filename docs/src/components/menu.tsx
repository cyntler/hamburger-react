import React from 'react'

export default () => (
  <div className="hidden md:flex -mr-4 lg:-mr-6 font-medium text-lg">
    <Anchor label="Installation" to="installation" lgOnly />
    <Anchor label="Properties" to="properties" />
    <Anchor label="Examples" to="properties" xlOnly />
  </div>
)

const Anchor = ({
  label,
  to,
  lgOnly = false,
  xlOnly = false,
}: {
  label: string
  to: string
  lgOnly?: boolean
  xlOnly?: boolean
}) => {
  const clickHandler = (to: string) => {
    if (typeof document === 'undefined') {
      return
    }

    const element = document.getElementById(to)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
        hover:text-purple-400
        transition-colors
        duration-300
      `}
      role="button"
      onKeyUp={(e) =>
        (e.key === 'Enter' || e.keyCode === 13) && clickHandler(to)
      }
      tabIndex={0}
      onClick={() => clickHandler(to)}
    >
      {label}
    </div>
  )
}
