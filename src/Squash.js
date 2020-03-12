import React from 'react'
import { Burger } from './Burger'

export const Squash = props => (
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
            ? `rotate(45deg)`
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
          transition: `${o.duration / 2}s ${o.timing}`,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
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
            ? `rotate(-45deg)`
            : 'none'
          }`,
        }} />
      </div>
    </div>
  )} />
)
