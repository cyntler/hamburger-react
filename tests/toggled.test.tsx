import React from 'react'
import Hamburger from '../src'
import { render, screen } from '@testing-library/react'

it(`accepts state value`, () => {
  render(<Hamburger toggled={true} />)

  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})
