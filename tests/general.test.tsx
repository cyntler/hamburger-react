import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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
} from '../src'

it(`renders all versions`, () => {
  const { getByTestId: get } = render(
    <>
      <Hamburger />
      <Cross />
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

  expect(get('fade')).toBeInTheDocument()
  expect(get('sling')).toBeInTheDocument()
  expect(get('spin')).toBeInTheDocument()
  expect(get('squash')).toBeInTheDocument()
  expect(get('tilt')).toBeInTheDocument()
  expect(get('turn')).toBeInTheDocument()
  expect(get('twirl')).toBeInTheDocument()
})

it(`renders two bars in a simple burger`, () => {
  const { getByTestId: get } = render(<Slant />)

  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
})

it(`renders three bars in a simple burger`, () => {
  const { getByTestId: get } = render(<Hamburger />)

  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
  expect(get('bar-three')).toBeInTheDocument()
})

it(`renders two bars in a complex burger`, () => {
  const { getByTestId: get } = render(<Pivot />)

  expect(get('bar-wrap-one')).toBeInTheDocument()
  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-wrap-two')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
})

it(`renders three bars in a complex burger`, () => {
  const { getByTestId: get } = render(<Squash />)

  expect(get('bar-wrap-one')).toBeInTheDocument()
  expect(get('bar-one')).toBeInTheDocument()
  expect(get('bar-wrap-two')).toBeInTheDocument()
  expect(get('bar-two')).toBeInTheDocument()
  expect(get('bar-wrap-three')).toBeInTheDocument()
  expect(get('bar-three')).toBeInTheDocument()
})

it(`animates on click`, () => {
  const { getByTestId: get } = render(<Hamburger />)

  expect(get('bar-two')).toHaveStyle({ transform: 'none' })

  fireEvent.click(get('tilt'))
  expect(get('bar-two')).toHaveStyle({ transform: 'scaleX(0)' })
})
