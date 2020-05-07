import React from 'react'
import Hamburger from '../src'
import { render, screen } from '@testing-library/react'

it(`inherits the color from its parent by default`, () => {
  render(<Hamburger />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ background: 'currentColor' })
})

it(`sets the correct color`, () => {
  render(<Hamburger color="pink" />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ background: 'pink' })
})
