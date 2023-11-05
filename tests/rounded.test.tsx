import React from 'react';
import Hamburger from '../src';
import { render, screen } from '@testing-library/react';

it(`doesn't have a border radius by default`, () => {
  render(<Hamburger />);

  expect(screen.getByTestId('bar-one')).not.toHaveStyle({
    borderRadius: '9em',
  });
});

it(`sets a border radius`, () => {
  render(<Hamburger rounded />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ borderRadius: '9em' });
});
