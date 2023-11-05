import React from 'react';
import Hamburger from '../src';
import { render, screen } from '@testing-library/react';

it(`sets an accessibility label`, () => {
  render(<Hamburger label="Toggle menu" />);

  expect(screen.getByTestId('tilt')).toHaveAttribute(
    'aria-label',
    'Toggle menu',
  );
});
