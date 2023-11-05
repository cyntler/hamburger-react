import React from 'react';
import Hamburger from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

it(`fires the callback with correct arguments`, () => {
  const onToggle = jest.fn();
  render(<Hamburger onToggle={onToggle} />);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(onToggle).toHaveBeenCalledWith(true);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(onToggle).toHaveBeenCalledWith(false);
});

it(`fires when state value and action are provided`, () => {
  const onToggle = jest.fn();
  render(<Hamburger toggled={true} toggle={jest.fn()} onToggle={onToggle} />);

  fireEvent.click(screen.getByTestId('tilt'));
  expect(onToggle).toHaveBeenCalledWith(false);
});
