import React from 'react'
import Hamburger from '../src'
import { fireEvent, createEvent, render, screen } from '@testing-library/react'

it(`fires the action with correct arguments`, () => {
  const toggle = jest.fn()
  render(<Hamburger toggled={false} toggle={toggle} />)

  const clickEvent = createEvent.click(screen.getByTestId('tilt')) 
  fireEvent(screen.getByTestId('tilt'), clickEvent)
  expect(toggle).toHaveBeenCalledWith(true, expect.objectContaining({ nativeEvent: clickEvent }))
})
