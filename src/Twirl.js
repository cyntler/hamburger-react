import { Burger } from './Burger'
import React from 'react'

export const Twirl = (props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="twirl"
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
      <div style={{
        transition: `${o.duration / 2}s ${o.timing} ${o.toggled
          ? '0s'
          : `${o.duration / 2}s`
        }`,
        transform: `${o.toggled
          ? `translateY(${o.barHeight + o.margin}px)`
          : 'none'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset}px`,
          transition: `${o.duration / 2}s ${o.timing} ${o.toggled
            ? `${o.duration / 2}s`
            : '0s'
          }`,
          transform: `${o.toggled
            ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)`
            : 'none'
          }`,
        }} />
      </div>

      <div style={{
        transition: `${o.duration / 2}s ${o.timing}`,
        opacity: `${o.toggled
          ? '0'
          : '1'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
          transition: `${o.duration / 2}s ${o.timing}`,
        }} />
      </div>

      <div style={{
        transition: `${o.duration / 2}s ${o.timing} ${o.toggled
          ? '0s'
          : `${o.duration / 2}s`
        }`,
        transform: `${o.toggled
          ? `translateY(-${o.barHeight + o.margin}px)`
          : 'none'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
          transition: `${o.duration / 2}s ${o.timing} ${o.toggled
            ? `${o.duration / 2}s`
            : '0s'
          }`,
          transform: `${o.toggled
            ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)`
            : 'none'
          }`,
        }} />
      </div>
    </div>
  )} />
)
