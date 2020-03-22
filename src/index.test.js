import React from 'react'
import Hamburger, { Fade, Sling, Spin, Squash, Turn, Twirl } from '.'
import { render } from '@testing-library/react'

it('does not throw an error', () => {
  render(<Hamburger />)
})

it('renders the "Fade" version', () => {
  const { getByTestId } = render(<Fade />)
  getByTestId('fade')
})

it('renders the "Sling" version', () => {
  const { getByTestId } = render(<Sling />)
  getByTestId('sling')
})

it('renders the "Spin" version', () => {
  const { getByTestId } = render(<Spin />)
  getByTestId('spin')
})

it('renders the "Squash" version', () => {
  const { getByTestId } = render(<Squash />)
  getByTestId('squash')
})

it('renders the "Tilt" version', () => {
  const { getByTestId } = render(<Hamburger />)
  getByTestId('tilt')
})

it('renders the "Turn" version', () => {
  const { getByTestId } = render(<Turn />)
  getByTestId('turn')
})

it('renders the "Twirl" version', () => {
  const { getByTestId } = render(<Twirl />)
  getByTestId('twirl')
})

it('renders three bars in a simple burger', () => {
  const { getByTestId } = render(<Hamburger />)
  getByTestId('bar-one')
  getByTestId('bar-two')
  getByTestId('bar-three')
})

it('renders three bars in a complex burger', () => {
  const { getByTestId } = render(<Squash />)
  getByTestId('bar-wrap-one')
  getByTestId('bar-one')
  getByTestId('bar-wrap-two')
  getByTestId('bar-two')
  getByTestId('bar-wrap-three')
  getByTestId('bar-three')
})
