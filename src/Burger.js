import { useState } from 'react'

const area = 48
const duration = 0.4
const timing = 'cubic-bezier(0, 0, 0, 1)'
const translate = 4.6325

export const Burger = ({
  color = '#000',
  direction = 'left',
  hideOutline = true,
  onToggle,
  render,
  rounded = false,
  size = 32,
}) => {
  const [toggled, toggle] = useState(false)

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)
  const marginRaw = width / 4.5
  const margin = Math.round(marginRaw)

  const height = barHeight * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)

  const deviation = (barHeightRaw - barHeight) + (marginRaw - margin)
  const move = ((width / translate) - (deviation / (4 / 3))).toFixed(2)

  const burgerStyles = {
    cursor: 'pointer',
    height: `${area}px`,
    position: 'relative',
    transition: `${duration}s ${timing}`,
    userSelect: 'none',
    width: `${area}px`,
  }

  const barStyles = {
    background: color,
    height: `${barHeight}px`,
    left: `${room}px`,
    position: 'absolute',
    width: `${width}px`,
  }

  if (hideOutline) {
    burgerStyles['outline'] = 'none'
  }

  if (rounded) {
    barStyles['borderRadius'] = '9em'
  }

  const handler = () => {
    if (onToggle) {
      onToggle(!toggled)
    }

    toggle(!toggled)
  }

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    duration,
    handler,
    isLeft: (direction === 'left'),
    margin,
    move,
    timing,
    toggled,
    topOffset,
  })
}
