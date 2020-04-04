import React from 'react'
import Hamburger from '../src'
import { render } from '@testing-library/react'

it(`inherits the color from its parent by default`, () => {
  const { getByTestId: get } = render(<Hamburger />)

  expect(get('bar-one')).toHaveStyle({ background: 'currentColor' })
})

it(`sets the correct color`, () => {
  const { getByTestId: get } = render(<Hamburger color="pink" />)

  expect(get('bar-one')).toHaveStyle({ background: 'pink' })
})
