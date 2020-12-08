import { Burger } from './Burger'
import React, { FunctionComponent } from 'react'
import { CommonBurgerProps } from './'

export const Divided = ((props) => (
  <Burger {...props} halfBar render={(o) => (
    <div
      className="hamburger-react"
      aria-label={o.label}
      data-testid="divided"
      onClick={o.handler}
      onKeyUp={(e) => e.key === 'Enter' && o.handler()}
      role="button"
      style={{
        ...o.burgerStyles,
      }}
      tabIndex={0}
    >
      <div style={{
        ...o.barStyles,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(${o.move / (5 / 2)}px, ${o.move / (3 / 2)}px) rotate(45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        left: '50%',
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(-${o.move / (5 / 2)}px, ${o.move / (3 / 2)}px) rotate(-45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.easing}`,
        opacity: o.isToggled ? 0 : 1,
        transform: `${o.isToggled
          ? `translate(${o.move * -1}px, 0)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        left: '50%',
        transition: `${o.time}s ${o.easing}`,
        opacity: o.isToggled ? 0 : 1,
        transform: `${o.isToggled
          ? `translate(${o.move}px, 0)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(${o.move / (5 / 2)}px, -${o.move / (3 / 2)}px) rotate(-45deg)`
          : 'none'
          }`,
      }} />

      <div style={{
        ...o.barStyles,
        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
        left: '50%',
        top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `translate(-${o.move / (5 / 2)}px, -${o.move / (3 / 2)}px) rotate(45deg)`
          : 'none'
          }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<CommonBurgerProps>
