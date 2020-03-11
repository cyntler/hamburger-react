import React from 'react'
import { Burger } from './Burger'

export const Tilt = props => (
  <Burger {...props} render={o => (
    <div
      className={o.name}
      style={{
        ...o.burgerStyles,
        transform: `${o.toggled
          ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)`
          : 'none'
        }`,
      }}
      onClick={o.handler}
      role="button"
      tabIndex="0"
      onKeyUp={e => (e.key === 13 || e.keyCode === 13) && o.handler()}
    >
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transform: `${o.toggled
          ? 'scale(0, 1)'
          : 'none'
        }`,
      }} />
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)
