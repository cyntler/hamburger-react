import React from 'react'
import Hamburger from '../src'
import { render, screen } from '@testing-library/react'

it(`has a size of 32 by default`, () => {
  render(<Hamburger />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ width: '32px' })
})

it(`sets the correct size`, () => {
  render(<Hamburger size={38} />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ width: '38px' })
})
