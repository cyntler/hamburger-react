import React from 'react'
import Hamburger from '../src'
import { render, fireEvent } from '@testing-library/react'

it(`fires the updater with correct arguments`, () => {
  const toggle = jest.fn()
  const { container } = render(<Hamburger toggled={false} toggle={toggle} />)

  fireEvent.click(container.firstChild)
  expect(toggle).toHaveBeenCalledWith(true)
})
