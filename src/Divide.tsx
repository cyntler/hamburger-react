import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Divide = ((props) => (
  <Burger {...props} render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      aria-expanded={o.isToggled}
      data-testid="divide"
      onClick={props.disabled ? undefined : o.handler}
      onKeyUp={props.disabled ? undefined : (e) => e.key === 'Enter' && o.handler()}
      role="button"
      style={o.burgerStyles}
      tabIndex={0}
      aria-controls={o.controls}
    >
      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(${o.move * 0.48}px, ${o.move * 0.73}px) rotate(45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        left: '50%',
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(-${o.move * 0.48}px, ${o.move * 0.73}px) rotate(-45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.easing}`,
        opacity: o.isToggled ? 0 : 1,
        transform: `${o.isToggled
          ? `translate(${-o.move * 1.25}px, 0)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        left: '50%',
        transition: `${o.time}s ${o.easing}`,
        opacity: o.isToggled ? 0 : 1,
        transform: `${o.isToggled
          ? `translate(${o.move * 1.25}px, 0)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(${o.move * 0.48}px, -${o.move * 0.73}px) rotate(-45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width / 2}px`,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        left: '50%',
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(-${o.move * 0.48}px, -${o.move * 0.73}px) rotate(45deg)`
          : 'none'
          }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
