import React from 'react'
import Hamburger from '../src'
import { fireEvent, render } from '@testing-library/react'

it(`fires the updater with correct arguments`, () => {
  const toggle = jest.fn()
  const { getByTestId: get } = render(<Hamburger toggled={false} toggle={toggle} />)

  fireEvent.click(get('tilt'))
  expect(toggle).toHaveBeenCalledWith(true)
})
