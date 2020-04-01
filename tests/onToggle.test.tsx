import React from 'react'
import Hamburger from '../src'
import { render, fireEvent } from '@testing-library/react'

it(`fires the callback with correct arguments`, () => {
  const onToggle = jest.fn()
  const { getByTestId: get } = render(<Hamburger onToggle={onToggle} />)

  fireEvent.click(get('tilt'))
  expect(onToggle).toHaveBeenCalledWith(true)

  fireEvent.click(get('tilt'))
  expect(onToggle).toHaveBeenCalledWith(false)
})

it(`doesn't fire when state value is provided without an action`, () => {
  const onToggle = jest.fn()
  const { getByTestId: get } = render(<Hamburger toggled={false} onToggle={onToggle} />)

  fireEvent.click(get('tilt'))
  expect(onToggle).not.toHaveBeenCalled()
})

it(`fires when state value and action are provided`, () => {
  const onToggle = jest.fn()
  const { getByTestId: get } = render(<Hamburger toggled={true} toggle={jest.fn()} onToggle={onToggle} />)

  fireEvent.click(get('tilt'))
  expect(onToggle).toHaveBeenCalledWith(false)
})
