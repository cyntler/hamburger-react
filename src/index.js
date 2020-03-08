import React, { useState } from 'react'

export const Hamburger = ({
  onToggle,
  size = 36,
}) => {
  const area = 48
  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)
  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)
  const marginRaw = width / 4.5
  const margin = Math.round(marginRaw)
  const height = barHeight * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)
  const deviation = (barHeightRaw - barHeight) + (marginRaw - margin)
  const translate = 4.6325
  const move = (width / translate) - (deviation / (4 / 3))
  const transition = 'transform 0.4s cubic-bezier(0, 0, 0, 1)'

  const [toggled, toggle] = useState(false)

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
