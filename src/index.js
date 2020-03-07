import React, { useState } from 'react'

export const Hamburger = ({ onToggle }) => {
  const area = 48
  const width = 34
  const room = Math.round((area - width) / 2)
  const line = Math.round(width / 10)
  const margin = Math.round(width / 4)
  const height = line * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)
  const move = width / 4.04
  const transition = 'transform 0.4s cubic-bezier(0, 0, 0, 1)'

  const [toggled, toggle] = useState(false)

  const handler = () => {
    if (onToggle) {
      onToggle(!toggled)
    }

    toggle(!toggled)
  }

  const lineStyles = {
    background: 'white',
    height: `${line}px`,
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
        ...lineStyles,
        top: `${topOffset}px`,
        transform: `${toggled ? `rotate(-45deg) translate(-${move}px, ${move}px)` : 'none'}`,
      }} />
      <div style={{
        ...lineStyles,
        top: `${topOffset + line + margin}px`,
        transform: `${toggled ? 'scale(0, 1)' : 'none'}`,
      }} />
      <div style={{
        ...lineStyles,
        top: `${topOffset + line * 2 + margin * 2}px`,
        transform: `${toggled ? `rotate(45deg) translate(-${move}px, -${move}px)` : 'none'}`,
      }} />
    </div>
  )
}
