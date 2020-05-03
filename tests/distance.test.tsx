import React from 'react'
import { Cross } from '../src'
import { render } from '@testing-library/react'

it(`can be set to small`, () => {
  const { getByTestId: get } = render(<Cross distance="sm" />)

  expect(get('bar-one')).toHaveStyle({ top: '17px' })
  expect(get('bar-two')).toHaveStyle({ top: '28px' })
})

it(`can be set to large`, () => {
  const { getByTestId: get } = render(<Cross distance="lg" />)

  expect(get('bar-one')).toHaveStyle({ top: '16px' })
  expect(get('bar-two')).toHaveStyle({ top: '30px' })
})

it(`is medium by default`, () => {
  const { getByTestId: get } = render(<Cross />)

  expect(get('bar-one')).toHaveStyle({ top: '17px' })
  expect(get('bar-two')).toHaveStyle({ top: '29px' })
})

it(`is medium when an invalid value is passed`, () => {
  const { getByTestId: get } = render(<Cross distance="just about right" />)

  expect(get('bar-one')).toHaveStyle({ top: '17px' })
  expect(get('bar-two')).toHaveStyle({ top: '29px' })
})

it(`works in combination with a custom tiny size`, () => {
  const { getByTestId: get } = render(<Cross distance="lg" size={24} />)

  expect(get('bar-one')).toHaveStyle({ top: '18px' })
  expect(get('bar-two')).toHaveStyle({ top: '28px' })
})

it(`works in combination with a custom big size`, () => {
  const { getByTestId: get } = render(<Cross distance="lg" size={40} />)

  expect(get('bar-one')).toHaveStyle({ top: '15px' })
  expect(get('bar-two')).toHaveStyle({ top: '31px' })
})
