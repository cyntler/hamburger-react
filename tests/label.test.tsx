import React from 'react'
import Hamburger from '../src'
import { render } from '@testing-library/react'

it(`sets an accessibility label`, () => {
  const { getByTestId: get } = render(<Hamburger label="Toggle menu" />)

  expect(get('tilt')).toHaveAttribute('aria-label', 'Toggle menu')
})
