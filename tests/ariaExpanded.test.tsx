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

it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Hamburger toggled={true} />)

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Hamburger toggled={false} />)

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Cross toggled={true} />)

  expect(screen.getByTestId('cross')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Cross toggled={false} />)

  expect(screen.getByTestId('cross')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Divide toggled={true} />)

  expect(screen.getByTestId('divide')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Divide toggled={false} />)

  expect(screen.getByTestId('divide')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Fade toggled={true} />)

  expect(screen.getByTestId('fade')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Fade toggled={false} />)

  expect(screen.getByTestId('fade')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Pivot toggled={true} />)

  expect(screen.getByTestId('pivot')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Pivot toggled={false} />)

  expect(screen.getByTestId('pivot')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Rotate toggled={true} />)

  expect(screen.getByTestId('rotate')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Rotate toggled={false} />)

  expect(screen.getByTestId('rotate')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Slant toggled={true} />)

  expect(screen.getByTestId('slant')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Slant toggled={false} />)

  expect(screen.getByTestId('slant')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Sling toggled={true} />)

  expect(screen.getByTestId('sling')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Sling toggled={false} />)

  expect(screen.getByTestId('sling')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Spin toggled={true} />)

  expect(screen.getByTestId('spin')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Spin toggled={false} />)

  expect(screen.getByTestId('spin')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Spiral toggled={true} />)

  expect(screen.getByTestId('spiral')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Spiral toggled={false} />)

  expect(screen.getByTestId('spiral')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Squash toggled={true} />)

  expect(screen.getByTestId('squash')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Squash toggled={false} />)

  expect(screen.getByTestId('squash')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Squeeze toggled={true} />)

  expect(screen.getByTestId('squeeze')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Squeeze toggled={false} />)

  expect(screen.getByTestId('squeeze')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Turn toggled={true} />)

  expect(screen.getByTestId('turn')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Turn toggled={false} />)

  expect(screen.getByTestId('turn')).toHaveAttribute('aria-expanded', 'false')
})


it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Twirl toggled={true} />)

  expect(screen.getByTestId('twirl')).toHaveAttribute('aria-expanded', 'true')
})

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Twirl toggled={false} />)

  expect(screen.getByTestId('twirl')).toHaveAttribute('aria-expanded', 'false')
})
