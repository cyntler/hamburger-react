import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Squeeze = ((props) => (
  <Burger {...props} _lines={2} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      data-testid="squeeze"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 'Enter' || e.keyCode === 13) && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex={0}
    >
      <div data-testid="bar-wrap-one" style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
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
          transition: `${o.time / 2}s ${o.timing} ${o.isToggled
            ? `${o.time / 2}s`
            : '0s'
          }`,
          transform: `${o.isToggled
            ? `rotate(45deg)`
            : 'none'
          }`,
        }} />
      </div>

      <div data-testid="bar-wrap-three" style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)`
          : 'none'
        }`,
      }}>
        <div data-testid="bar-three" style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
          transition: `${o.time / 2}s ${o.timing} ${o.isToggled
            ? `${o.time / 2}s`
            : '0s'
          }`,
          transform: `${o.isToggled
            ? `rotate(-45deg)`
            : 'none'
          }`,
        }} />
      </div>
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
