import React from 'react'
import Hamburger, { Fade, Sling, Spin, Squash, Turn, Twirl } from '.'
import { render } from '@testing-library/react'

it('does not throw an error', () => {
  render(<Hamburger />)
})

it('renders "Fade" version', () => {
  const { getByTestId } = render(<Fade />)
  getByTestId('fade')
})

it('renders "Sling" version', () => {
  const { getByTestId } = render(<Sling />)
  getByTestId('sling')
})

it('renders "Spin" version', () => {
  const { getByTestId } = render(<Spin />)
  getByTestId('spin')
})

it('renders "Squash" version', () => {
  const { getByTestId } = render(<Squash />)
  getByTestId('squash')
})

it('renders "Tilt" version', () => {
  const { getByTestId } = render(<Hamburger />)
  getByTestId('tilt')
})

it('renders "Turn" version', () => {
  const { getByTestId } = render(<Turn />)
  getByTestId('turn')
})

it('renders "Twirl" version', () => {
  const { getByTestId } = render(<Twirl />)
  getByTestId('twirl')
})
