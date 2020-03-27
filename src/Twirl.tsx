import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './common-types'

export const Twirl = ((props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      data-testid="twirl"
      onClick={o.handler}
      onKeyUp={(e) => (e.key === 'Enter' || e.keyCode === 13) && o.handler()}
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
      <div style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(${o.barHeight + o.margin}px)`
          : 'none'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset}px`,
          transition: `${o.time / 2}s ${o.timing} ${o.isToggled
            ? `${o.time / 2}s`
            : '0s'
          }`,
          transform: `${o.isToggled
            ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)`
            : 'none'
          }`,
        }} />
      </div>

      <div style={{
        transition: `${o.time / 2}s ${o.timing}`,
        opacity: `${o.isToggled
          ? '0'
          : '1'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight + o.margin}px`,
          transition: `${o.time / 2}s ${o.timing}`,
        }} />
      </div>

      <div style={{
        transition: `${o.time / 2}s ${o.timing} ${o.isToggled
          ? '0s'
          : `${o.time / 2}s`
        }`,
        transform: `${o.isToggled
          ? `translateY(-${o.barHeight + o.margin}px)`
          : 'none'
        }`,
      }}>
        <div style={{
          ...o.barStyles,
          top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
          transition: `${o.time / 2}s ${o.timing} ${o.isToggled
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
