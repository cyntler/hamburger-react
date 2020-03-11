import React from 'react'
import { Burger } from './Burger'

export const Fade = props => (
  <Burger {...props} render={o => (
    <div
      className={o.name}
      style={o.burgerStyles}
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
        transition: `${o.duration}s ${o.timing}`,
      }} />
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        opacity: `${o.toggled
          ? '0'
          : '1'
        }`,
        transition: `${o.duration}s ${o.timing}`,
      }} />
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transform: `${o.toggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
        transition: `${o.duration}s ${o.timing}`,
      }} />
    </div>
  )} />
)
