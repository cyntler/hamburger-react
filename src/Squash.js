import { Burger } from './Burger'
import React from 'react'

export const Squash = (props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="squash"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 13 || e.keyCode === 13) && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex="0"
    >
      <div data-testid="bar-wrap-one" style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(${o.barHeight + o.margin}px)`
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

      <div data-testid="bar-wrap-two" style={{
        transition: `${o.time / 2}s ${o.timing}`,
        opacity: `${o.isToggled
          ? '0'
          : '1'
        }`,
      }}>
        <div data-testid="bar-two" style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
          transition: `${o.time / 2}s ${o.timing}`,
        }} />
      </div>

      <div data-testid="bar-wrap-three" style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(-${o.barHeight + o.margin}px)`
          : 'none'
        }`,
      }}>
        <div data-testid="bar-three" style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
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
)
