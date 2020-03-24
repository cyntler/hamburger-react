import React from 'react'
import Hamburger, { Squash } from '../src'
import { render, fireEvent } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'

it('"onToggle": it fires the callback with correct arguments', () => {
  const onToggle = jest.fn()
  const { container } = render(<Hamburger onToggle={onToggle} />)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(true)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(false)
})

it('"duration": it can be set as float', () => {
  const { getByTestId: get } = render(<Hamburger duration={0.4} />)

  expect(get('bar-one')).toHaveStyle({ transition: '0.4s cubic-bezier(0, 0, 0, 1)' })
})

it('"duration": it can be set as integer', () => {
  const { getByTestId: get } = render(<Hamburger duration={2} />)

  expect(get('bar-one')).toHaveStyle({ transition: '2s cubic-bezier(0, 0, 0, 1)' })
})

it('"duration": it calculates delay', () => {
  const { getByTestId: get } = render(<Squash duration={1.4} />)

  expect(get('bar-wrap-one')).toHaveStyle({ transition: '0.7s cubic-bezier(0, 0, 0, 1) 0.7s' })
})
