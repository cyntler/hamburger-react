import React from 'react'
import Hamburger, { Fade, Sling, Spin, Squash, Turn, Twirl } from '../src'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom'

it('renders all versions', () => {
  const { getByTestId: get } = render(
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

  expect(get('fade')).toBeInTheDocument()
  expect(get('sling')).toBeInTheDocument()
  expect(get('spin')).toBeInTheDocument()
  expect(get('squash')).toBeInTheDocument()
  expect(get('tilt')).toBeInTheDocument()
  expect(get('turn')).toBeInTheDocument()
  expect(get('twirl')).toBeInTheDocument()
})

it('renders three bars in a simple burger', () => {
  const { getByTestId: get } = render(<Hamburger />)

  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
  expect(get('bar-three')).toBeInTheDocument()
})

it('renders three bars in a complex burger', () => {
  const { getByTestId: get } = render(<Squash />)

  expect(get('bar-wrap-one')).toBeInTheDocument()
  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-wrap-two')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
  expect(get('bar-wrap-three')).toBeInTheDocument()
  expect(get('bar-three')).toBeInTheDocument()
})

it('animates on click', () => {
  const { container, getByTestId: get } = render(<Hamburger />)

  expect(get('bar-two')).toHaveStyle({ transform: 'none' })

  fireEvent.click(container.firstChild)
  expect(get('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})
