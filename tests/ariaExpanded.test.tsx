import React from 'react';
import Hamburger from '../src';
import { render, screen } from '@testing-library/react';

it(`has an expansion indicator (for accessibility) when toggled`, () => {
  render(<Hamburger toggled />);

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'true');
});

it(`doesn't have an expansion indicator (for accessibility) when closed`, () => {
  render(<Hamburger />);

  expect(screen.getByTestId('tilt')).toHaveAttribute('aria-expanded', 'false');
});
