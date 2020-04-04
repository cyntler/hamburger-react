import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Fade = ((props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      data-testid="fade"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 'Enter' || e.keyCode === 13) && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex={0}
    >
      <div style={{
        ...o.barStyles,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.timing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.timing}`,
        opacity: `${o.isToggled
          ? '0'
          : '1'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.timing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
