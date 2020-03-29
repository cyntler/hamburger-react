import React from 'react'
import Hamburger, { Squash } from '../src'
import { render } from '@testing-library/react'

it(`accepts state`, () => {
  const { getByTestId: get } = render(<Hamburger toggled={true} />)

  expect(get('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})
