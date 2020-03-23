import { Burger } from './Burger'
import React from 'react'

export const Tilt = (props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="tilt"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 13 || e.keyCode === 13) && o.handler()}
      role="button"
      style={{
        ...o.burgerStyles,
        transform: `${o.toggled
          ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)`
          : 'none'
        }`,
      }}
      tabIndex="0"
    >
      <div data-testid="bar-one" style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transition: `${o.duration}s ${o.timing}`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div data-testid="bar-two" style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.duration}s ${o.timing}`,
        transform: `${o.toggled
          ? 'scaleX(0)'
          : 'none'
        }`,
      }} />

      <div data-testid="bar-three" style={{
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
