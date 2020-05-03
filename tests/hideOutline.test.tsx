import React from 'react'
import Hamburger from '../src'
import { render } from '@testing-library/react'

it('is hidden by default', () => {
  const { getByTestId: get } = render(<Hamburger />)

  expect(get('tilt')).toHaveStyle({ outline: 'none' })
})

it(`can be set to visible`, () => {
  const { getByTestId: get } = render(<Hamburger hideOutline={false} />)

  expect(get('tilt')).not.toHaveStyle({ outline: 'none' })
})
