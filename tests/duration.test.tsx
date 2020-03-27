import React from 'react'
import Hamburger, { Squash } from '../src'
import { render } from '@testing-library/react'

it(`can be set as float`, () => {
  const { getByTestId: get } = render(<Hamburger duration={0.4} />)

  expect(get('bar-one')).toHaveStyle({ transition: '0.4s cubic-bezier(0, 0, 0, 1)' })
})

it(`can be set as integer`, () => {
  const { getByTestId: get } = render(<Hamburger duration={2} />)

  expect(get('bar-one')).toHaveStyle({ transition: '2s cubic-bezier(0, 0, 0, 1)' })
})

it(`calculates delay`, () => {
  const { getByTestId: get } = render(<Squash duration={1.4} />)

  expect(get('bar-wrap-one')).toHaveStyle({ transition: '0.7s cubic-bezier(0, 0, 0, 1) 0.7s' })
})
