import React from 'react'
import Hamburger from '../src'
import { render, screen } from '@testing-library/react'

it('is hidden by default', () => {
  render(<Hamburger />)

  expect(screen.getByTestId('tilt')).toHaveStyle({ outline: 'none' })
})

it(`can be set to visible`, () => {
  render(<Hamburger hideOutline={false} />)

  expect(screen.getByTestId('tilt')).not.toHaveStyle({ outline: 'none' })
})
