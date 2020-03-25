import React from 'react'
import Hamburger, { Squash } from '../src'
import { render, fireEvent } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'

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

it('"toggled": it accepts state', () => {
  const { getByTestId: get } = render(<Hamburger toggled={true} />)

  expect(get('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})

it('"toggle": it fires the updater with correct arguments', () => {
  const toggle = jest.fn()
  const { container } = render(<Hamburger toggled={false} toggle={toggle} />)

  fireEvent.click(container.firstChild)
  expect(toggle).toHaveBeenCalledWith(true)
})

it('"onToggle": it fires the callback with correct arguments', () => {
  const onToggle = jest.fn()
  const { container } = render(<Hamburger onToggle={onToggle} />)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(true)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(false)
})

it(`"onToggle": it doesn't fire when state is provider without an updater`, () => {
  const onToggle = jest.fn()
  const { container } = render(<Hamburger toggled={false} onToggle={onToggle} />)

  fireEvent.click(container.firstChild)
  expect(onToggle).not.toHaveBeenCalled()
})

it(`"onToggle": it fires when state and updater are provided`, () => {
  const onToggle = jest.fn()
  const { container } = render(<Hamburger toggled={true} toggle={jest.fn()} onToggle={onToggle} />)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(false)
})
