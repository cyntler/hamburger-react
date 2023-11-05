import React from 'react';
import Hamburger from '../src';
import { render, screen } from '@testing-library/react';

it(`has a default cubic timing`, () => {
  render(<Hamburger duration={0.2} />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({
    transition: '0.2s cubic-bezier(0, 0, 0, 1)',
  });
});

it(`sets the correct size`, () => {
  render(<Hamburger duration={0.2} easing="ease-out" />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({
    transition: '0.2s ease-out',
  });
});
