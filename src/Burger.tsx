import { CSSProperties, Dispatch, FunctionComponent, useState } from 'react'
import { BurgerProps } from './'

const area = 48
const timing = 'cubic-bezier(0, 0, 0, 1)'
const translate = 4.6325

export const Burger = (({
  color = '#000',
  direction = 'left',
  duration = 0.4,
  hideOutline = true,
  onToggle,
  render,
  rounded = false,
  size = 32,
  toggle,
  toggled,
}) => {
  const [toggledInternal, toggleInternal] = useState(false)

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)
  const marginRaw = width / 4.5
  const margin = Math.round(marginRaw)

  const height = barHeight * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)

  const deviation = (barHeightRaw - barHeight) + (marginRaw - margin)
  const move = parseFloat(((width / translate) - (deviation / (4 / 3))).toFixed(2))
  const time = Math.max(0, duration)

  const burgerStyles: CSSProperties = {
    cursor: 'pointer',
    height: `${area}px`,
    position: 'relative',
    transition: `${time}s ${timing}`,
    userSelect: 'none',
    width: `${area}px`,
  }

  const barStyles: CSSProperties = {
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

  let hasExternalSetter = false
  let hasExternalState = false
  let toggleFunction: Dispatch<boolean>
  let isToggled = toggledInternal

  if (toggle !== undefined) {
    hasExternalSetter = true
    toggleFunction = toggle
  }
  if (toggled !== undefined) {
    hasExternalState = true
    isToggled = toggled
  }

  const isExternal = hasExternalSetter && hasExternalState
  const isInternal = !hasExternalSetter && !hasExternalState

  if (!hasExternalSetter && isInternal) {
    toggleFunction = toggleInternal
  }

  const handler = () => {
    if (onToggle && (isExternal || isInternal)) {
      onToggle(!isToggled)
    }

    if (toggleFunction) {
      toggleFunction(!isToggled)
    }
  }

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    handler,
    isLeft: (direction === 'left'),
    isToggled,
    margin,
    move,
    time,
    timing,
    topOffset,
  })
}) as FunctionComponent<BurgerProps>
