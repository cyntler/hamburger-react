import React from 'react'
import Hamburger, {
  Divide,
  Cross,
  Fade,
  Pivot,
  Rotate,
  Slant,
  Sling,
  Spin,
  Spiral,
  Squash,
  Squeeze,
  Turn,
  Twirl
} from '../src'
import { render, screen } from '@testing-library/react'

it(`sets the aria-expanded attribute to true when open for accessibility for Tilt`, () => {
  render(<Hamburger toggled={true} />)

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Tilt`, () => {
  render(<Hamburger toggled={false} />)

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Cross`, () => {
  render(<Cross toggled={true} />)

  expect(screen.getByTestId('cross')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Cross`, () => {
  render(<Cross toggled={false} />)

  expect(screen.getByTestId('cross')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Divide`, () => {
  render(<Divide toggled={true} />)

  expect(screen.getByTestId('divide')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Divide`, () => {
  render(<Divide toggled={false} />)

  expect(screen.getByTestId('divide')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Fade`, () => {
  render(<Fade toggled={true} />)

  expect(screen.getByTestId('fade')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Fade`, () => {
  render(<Fade toggled={false} />)

  expect(screen.getByTestId('fade')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Pivot`, () => {
  render(<Pivot toggled={true} />)

  expect(screen.getByTestId('pivot')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Pivot`, () => {
  render(<Pivot toggled={false} />)

  expect(screen.getByTestId('pivot')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Rotate`, () => {
  render(<Rotate toggled={true} />)

  expect(screen.getByTestId('rotate')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Rotate`, () => {
  render(<Rotate toggled={false} />)

  expect(screen.getByTestId('rotate')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Slant`, () => {
  render(<Slant toggled={true} />)

  expect(screen.getByTestId('slant')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Slant`, () => {
  render(<Slant toggled={false} />)

  expect(screen.getByTestId('slant')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Sling`, () => {
  render(<Sling toggled={true} />)

  expect(screen.getByTestId('sling')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Sling`, () => {
  render(<Sling toggled={false} />)

  expect(screen.getByTestId('sling')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Spin`, () => {
  render(<Spin toggled={true} />)

  expect(screen.getByTestId('spin')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Spin`, () => {
  render(<Spin toggled={false} />)

  expect(screen.getByTestId('spin')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Spiral`, () => {
  render(<Spiral toggled={true} />)

  expect(screen.getByTestId('spiral')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Spiral`, () => {
  render(<Spiral toggled={false} />)

  expect(screen.getByTestId('spiral')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Squash`, () => {
  render(<Squash toggled={true} />)

  expect(screen.getByTestId('squash')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Squash`, () => {
  render(<Squash toggled={false} />)

  expect(screen.getByTestId('squash')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Squeeze`, () => {
  render(<Squeeze toggled={true} />)

  expect(screen.getByTestId('squeeze')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Squeeze`, () => {
  render(<Squeeze toggled={false} />)

  expect(screen.getByTestId('squeeze')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Turn`, () => {
  render(<Turn toggled={true} />)

  expect(screen.getByTestId('turn')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Turn`, () => {
  render(<Turn toggled={false} />)

  expect(screen.getByTestId('turn')).toHaveAttribute('aria-expanded', 'false')
})


it(`sets the aria-expanded attribute to true when open for accessibility for Twirl`, () => {
  render(<Twirl toggled={true} />)

  expect(screen.getByTestId('twirl')).toHaveAttribute('aria-expanded', 'true')
})

it(`sets the aria-expanded attribute to false when close for accessibility for Twirl`, () => {
  render(<Twirl toggled={false} />)

  expect(screen.getByTestId('twirl')).toHaveAttribute('aria-expanded', 'false')
})
