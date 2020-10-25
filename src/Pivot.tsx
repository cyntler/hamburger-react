import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Pivot = ((props) => (
  <Burger {...props} lines={2} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      data-testid="pivot"
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
      <div data-testid="bar-wrap-one" style={{
        transition: `${o.time / 2}s ${o.easing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(${o.barHeight / 2 + o.margin / 2}px)`
          : 'none'
        }`,
      }}>
        <div data-testid="bar-one" style={{
          ...o.barStyles,
          top: `${o.topOffset}px`,
          transition: `${o.time / 2}s ${o.easing} ${o.isToggled
            ? `${o.time / 2}s`
            : '0s'
          }`,
          transform: `${o.isToggled
            ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)`
            : 'none'
          }`,
        }} />
      </div>

      <div data-testid="bar-wrap-two" style={{
        transition: `${o.time / 2}s ${o.easing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)`
          : 'none'
        }`,
      }}>
        <div data-testid="bar-two" style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
          transition: `${o.time / 2}s ${o.easing} ${o.isToggled
            ? `${o.time / 2}s`
            : '0s'
          }`,
          transform: `${o.isToggled
            ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)`
            : 'none'
          }`,
        }} />
      </div>
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
