import React from 'react'
import Hamburger from '../src'
import { render, fireEvent } from '@testing-library/react'

it(`animates to the left`, () => {
  const { getByTestId: get } = render(<Hamburger direction="left" />)

  fireEvent.click(get('tilt'))
  expect(get('tilt')).toHaveStyle({ transform: 'rotate(-90deg)' })
})

it(`animates to the right`, () => {
  const { getByTestId: get } = render(<Hamburger direction="right" />)

  fireEvent.click(get('tilt'))
  expect(get('tilt')).toHaveStyle({ transform: 'rotate(90deg)' })
})
