import React from 'react'
import Hamburger from '../src'
import { fireEvent, createEvent, render, screen } from '@testing-library/react'

it(`fires the callback with correct arguments`, () => {
  const onToggle = jest.fn()
  render(<Hamburger onToggle={onToggle} />)

  const clickEvent = createEvent.click(screen.getByTestId('tilt')) 
  fireEvent(screen.getByTestId('tilt'), clickEvent)
  expect(onToggle).toHaveBeenCalledWith(true, expect.objectContaining({ nativeEvent: clickEvent }))

  fireEvent(screen.getByTestId('tilt'), clickEvent)
  expect(onToggle).toHaveBeenCalledWith(false, expect.objectContaining({ nativeEvent: clickEvent }))
})

it(`fires when state value and action are provided`, () => {
  const onToggle = jest.fn()
  render(<Hamburger toggled={true} toggle={jest.fn()} onToggle={onToggle} />)

  const clickEvent = createEvent.click(screen.getByTestId('tilt')) 
  fireEvent(screen.getByTestId('tilt'), clickEvent)
  expect(onToggle).toHaveBeenCalledWith(false, expect.objectContaining({ nativeEvent: clickEvent }))
})
