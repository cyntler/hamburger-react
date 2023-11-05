import React from 'react';
import Hamburger from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

it(`accepts "true" as individual state value`, () => {
  render(<Hamburger toggled={true} />);
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'scaleX(0)' });

  fireEvent.click(screen.getByTestId('tilt'));
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'scaleX(0)' });
});

it(`accepts "false" as individual state value`, () => {
  render(<Hamburger toggled={false} />);
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'none' });

  fireEvent.click(screen.getByTestId('tilt'));
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'none' });
});
