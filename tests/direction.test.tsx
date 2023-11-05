import React from 'react';
import Hamburger from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

it(`animates to the left`, () => {
  render(<Hamburger direction="left" />);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(screen.getByTestId('tilt')).toHaveStyle({
    transform: 'rotate(-90deg)',
  });
});

it(`animates to the right`, () => {
  render(<Hamburger direction="right" />);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(screen.getByTestId('tilt')).toHaveStyle({
    transform: 'rotate(90deg)',
  });
});
