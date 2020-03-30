import React from 'react'
import Hamburger from '../src'
import { render } from '@testing-library/react'

it(`sets the correct color`, () => {
  const { getByTestId: get } = render(<Hamburger color="pink" />)

  expect(get('bar-one')).toHaveStyle({ background: 'pink' })
})
