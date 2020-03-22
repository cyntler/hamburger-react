import { Burger } from './Burger'
import React from 'react'

export const Turn = (props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="turn"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 13 || e.keyCode === 13) && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex="0"
    >
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transition: `${o.duration}s ${o.timing}`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.duration / 2}s ${o.timing}`,
        transform: `${o.toggled
          ? 'scale(0, 1)'
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.duration}s ${o.timing}`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)
