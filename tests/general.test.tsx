import React from 'react'
import { render, screen } from '@testing-library/react'
import Hamburger, {
  Fade,
  Slant,
  Sling,
  Spin,
  Squash,
  Turn,
  Twirl,
  Squeeze,
  Cross,
  Rotate,
  Pivot,
  Spiral,
  Divide,
} from '../src'

it(`renders all versions`, () => {
  render(
    <>
      <Hamburger />
      <Cross />
      <Divide />
      <Fade />
      <Pivot />
      <Rotate />
      <Slant />
      <Sling />
      <Spin />
      <Spiral />
      <Squash />
      <Squeeze />
      <Turn />
      <Twirl />
    </>
  )

  expect(screen.getByTestId('divide')).toBeInTheDocument()
  expect(screen.getByTestId('fade')).toBeInTheDocument()
  expect(screen.getByTestId('sling')).toBeInTheDocument()
  expect(screen.getByTestId('spin')).toBeInTheDocument()
  expect(screen.getByTestId('squash')).toBeInTheDocument()
  expect(screen.getByTestId('tilt')).toBeInTheDocument()
  expect(screen.getByTestId('turn')).toBeInTheDocument()
  expect(screen.getByTestId('twirl')).toBeInTheDocument()
})

it(`renders two bars in a simple burger`, () => {
  render(<Slant />)

  expect(screen.getByTestId('bar-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-two')).toBeInTheDocument()
})

it(`renders three bars in a simple burger`, () => {
  render(<Hamburger />)

  expect(screen.getByTestId('bar-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-two')).toBeInTheDocument()
  expect(screen.getByTestId('bar-three')).toBeInTheDocument()
})

it(`renders two bars in a complex burger`, () => {
  render(<Pivot />)

  expect(screen.getByTestId('bar-wrap-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-wrap-two')).toBeInTheDocument()
  expect(screen.getByTestId('bar-two')).toBeInTheDocument()
})

it(`renders three bars in a complex burger`, () => {
  render(<Squash />)

  expect(screen.getByTestId('bar-wrap-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-one')).toBeInTheDocument()
  expect(screen.getByTestId('bar-wrap-two')).toBeInTheDocument()
  expect(screen.getByTestId('bar-two')).toBeInTheDocument()
  expect(screen.getByTestId('bar-wrap-three')).toBeInTheDocument()
  expect(screen.getByTestId('bar-three')).toBeInTheDocument()
})
