import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hamburger from '../src';

it(`animates on click and enter`, () => {
  render(<Hamburger />);
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'none' });

  fireEvent.click(screen.getByTestId('tilt'));
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'scaleX(0)' });

  fireEvent.keyUp(screen.getByTestId('tilt'), { key: 'Enter' });
  expect(screen.getByTestId('bar-two')).toHaveStyle({ transform: 'none' });
});
