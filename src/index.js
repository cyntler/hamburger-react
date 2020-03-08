import React, { useState } from 'react'

export const Hamburger = ({
  onToggle,
  size = 'm',
}) => {
  const area = 48
  const sizes = { xs: 16, s: 24, m: 32, l: 40, xl: 48 }
  const width = sizes[size] ? sizes[size] : sizes['m']
  const room = Math.round((area - width) / 2)
  const barHeight = Math.round(width / 12)
  const margin = Math.round(width / 4)
  const height = barHeight * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)
  const translations = { xs: 4.55, s: 4.25, m: 4.1, l: 4.35, xl: 4.25 }
  const move = width / (translations[size] ? translations[size] : translations['m'])
  const transition = 'transform 0.4s cubic-bezier(0, 0, 0, 1)'

  const [toggled, toggle] = useState(true)

  const handler = () => {
    if (onToggle) {
      onToggle(!toggled)
    }

    toggle(!toggled)
  }

  const barStyles = {
    background: 'white',
    height: `${barHeight}px`,
    left: `${room}px`,
    position: 'absolute',
    transition: 'transform 0.4s cubic-bezier(0, 0, 0, 1)',
    width: `${width}px`,
  }

  return (
    <div
      className="hamburger-react"
      style={{
        cursor: 'pointer',
        height: `${area}px`,
        outline: 'none',
        position: 'relative',
        transform: `${toggled ? 'rotate(-90deg)' : 'none'}`,
        transition: `${transition}`,
        userSelect: 'none',
        width: `${area}px`,
      }}
      onClick={handler}
      role="button"
      tabIndex="0"
      onKeyUp={e => (e.key === 13 || e.keyCode === 13) && handler()}
    >
      <div style={{
        ...barStyles,
        top: `${topOffset}px`,
        transform: `${toggled ? `rotate(-45deg) translate(-${move}px, ${move}px)` : 'none'}`,
      }} />
      <div style={{
        ...barStyles,
        top: `${topOffset + barHeight + margin}px`,
        transform: `${toggled ? 'scale(0, 1)' : 'none'}`,
      }} />
      <div style={{
        ...barStyles,
        top: `${topOffset + barHeight * 2 + margin * 2}px`,
        transform: `${toggled ? `rotate(45deg) translate(-${move}px, -${move}px)` : 'none'}`,
      }} />
    </div>
  )
}
