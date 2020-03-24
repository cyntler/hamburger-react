import React from 'react'
import Hamburger, { Fade, Sling, Spin, Squash, Turn, Twirl } from '../src'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

it('renders all versions', () => {
  const { getByTestId } = render(
    <>
      <Fade />
      <Hamburger />
      <Sling />
      <Spin />
      <Squash />
      <Turn />
      <Twirl />
    </>
  )

  expect(getByTestId('fade')).toBeInTheDocument()
  expect(getByTestId('sling')).toBeInTheDocument()
  expect(getByTestId('spin')).toBeInTheDocument()
  expect(getByTestId('squash')).toBeInTheDocument()
  expect(getByTestId('tilt')).toBeInTheDocument()
  expect(getByTestId('turn')).toBeInTheDocument()
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
