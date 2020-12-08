import React from 'react'
import Hamburger from '../src'
import { render, screen } from '@testing-library/react'

it(`has a size of 16 by default`, () => {
  render(<Hamburger halfBar />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ width: '16px' })
})

it(`sets the correct size`, () => {
  render(<Hamburger halfBar size={38} />)

  expect(screen.getByTestId('bar-one')).toHaveStyle({ width: '19px' })
})
