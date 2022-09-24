import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Slant = ((props) => (
  <Burger {...props} lines={2} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      aria-expanded={o.isToggled}
      data-testid="slant"
      onClick={o.handler}
      onKeyUp={(e) => e.key === 'Enter' && o.handler()}
      role="button"
      style={{
        ...o.burgerStyles,
        transform: `${o.isToggled
          ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)`
          : 'none'
        }`,
      }}
      tabIndex={0}
    >
      <span data-testid="bar-one" style={{
        ...o.barStyles,
        width: `${o.width}px`,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <span data-testid="bar-two" style={{
        ...o.barStyles,
        width: `${o.width}px`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
