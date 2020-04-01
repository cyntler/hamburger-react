import React from 'react'
import Hamburger from '../src'
import { render } from '@testing-library/react'

it(`accepts state value`, () => {
  const { getByTestId: get } = render(<Hamburger toggled={true} />)

  expect(get('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})
