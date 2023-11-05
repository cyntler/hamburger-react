import React from 'react';
import Hamburger from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

it(`fires the action with correct arguments`, () => {
  const toggle = jest.fn();
  render(<Hamburger toggled={false} toggle={toggle} />);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(toggle).toHaveBeenCalledWith(true);
});
