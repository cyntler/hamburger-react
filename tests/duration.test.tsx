import React from 'react';
import Hamburger, { Squash } from '../src';
import { render, screen } from '@testing-library/react';

it(`can be set as float`, () => {
  render(<Hamburger duration={0.4} />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({
    transition: '0.4s cubic-bezier(0, 0, 0, 1)',
  });
});

it(`can be set as integer`, () => {
  render(<Hamburger duration={2} />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({
    transition: '2s cubic-bezier(0, 0, 0, 1)',
  });
});

it(`calculates delay`, () => {
  render(<Squash duration={1.4} />);

  expect(screen.getByTestId('bar-wrap-one')).toHaveStyle({
    transition: '0.7s cubic-bezier(0, 0, 0, 1) 0.7s',
  });
});
