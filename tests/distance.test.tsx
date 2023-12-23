import React from 'react';
import { Cross } from '../src';
import { render, screen } from '@testing-library/react';

it(`can be set to small`, () => {
  render(<Cross distance="sm" />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '17px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '28px' });
});

it(`can be set to large`, () => {
  render(<Cross distance="lg" />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '16px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '30px' });
});

it(`is medium by default`, () => {
  render(<Cross />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '17px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '29px' });
});

it(`is medium when an invalid value is passed`, () => {
  render(<Cross distance="md" />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '17px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '29px' });
});

it(`works in combination with a custom tiny size`, () => {
  render(<Cross distance="lg" size={24} />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '18px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '28px' });
});

it(`works in combination with a custom big size`, () => {
  render(<Cross distance="lg" size={40} />);

  expect(screen.getByTestId('bar-one')).toHaveStyle({ top: '15px' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ top: '31px' });
});
