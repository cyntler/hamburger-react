import { Burger } from './Burger'
import React from 'react'

export const Sling = (props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="sling"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 13 || e.keyCode === 13) && o.handler()}
      role="button"
      style={{
        ...o.burgerStyles,
        transform: `${o.toggled
          ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)`
          : 'none'
        }`,
      }}
      tabIndex="0"
    >
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.timing}`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.timing}`,
        transform: `${o.toggled
          ? `scale(0, 1) translate(${(o.move * 20) * (o.isLeft ? -1 : 1)}px, 0)`
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.timing}`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)
