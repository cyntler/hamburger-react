import React from 'react'
import Hamburger, { Fade, Sling, Spin, Squash, Turn, Twirl } from '.'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

it('does not throw an error', () => {
  render(<Hamburger />)
})

it('renders the "Fade" version', () => {
  const { getByTestId } = render(<Fade />)

  expect(getByTestId('fade')).toBeInTheDocument()
})

it('renders the "Sling" version', () => {
  const { getByTestId } = render(<Sling />)

  expect(getByTestId('sling')).toBeInTheDocument()
})

it('renders the "Spin" version', () => {
  const { getByTestId } = render(<Spin />)

  expect(getByTestId('spin')).toBeInTheDocument()
})

it('renders the "Squash" version', () => {
  const { getByTestId } = render(<Squash />)

  expect(getByTestId('squash')).toBeInTheDocument()
})

it('renders the "Tilt" version', () => {
  const { getByTestId } = render(<Hamburger />)

  expect(getByTestId('tilt')).toBeInTheDocument()
})

it('renders the "Turn" version', () => {
  const { getByTestId } = render(<Turn />)

  expect(getByTestId('turn')).toBeInTheDocument()
})

it('renders the "Twirl" version', () => {
  const { getByTestId } = render(<Twirl />)

  expect(getByTestId('twirl')).toBeInTheDocument()
})

it('renders three bars in a simple burger', () => {
  const { getByTestId } = render(<Hamburger />)

  expect(getByTestId('bar-one')).toBeInTheDocument()
  expect(getByTestId('bar-two')).toBeInTheDocument()
  expect(getByTestId('bar-three')).toBeInTheDocument()
})

it('renders three bars in a complex burger', () => {
  const { getByTestId } = render(<Squash />)

  expect(getByTestId('bar-wrap-one')).toBeInTheDocument()
  expect(getByTestId('bar-one')).toBeInTheDocument()
  expect(getByTestId('bar-wrap-two')).toBeInTheDocument()
  expect(getByTestId('bar-two')).toBeInTheDocument()
  expect(getByTestId('bar-wrap-three')).toBeInTheDocument()
  expect(getByTestId('bar-three')).toBeInTheDocument()
})

it('animates on click', () => {
  const { container, getByTestId } = render(<Hamburger />)

  expect(getByTestId('bar-two')).toHaveStyle({ transform: 'none' })

  fireEvent.click(container.firstChild)
  expect(getByTestId('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})

it('fires the "onToggle" callback with correct arguments', () => {
  const onToggle = jest.fn()
  const { container } = render(<Hamburger onToggle={onToggle} />)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(true)

  fireEvent.click(container.firstChild)
  expect(onToggle).toHaveBeenCalledWith(false)
})
