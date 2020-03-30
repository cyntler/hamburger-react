import { CSSProperties, MouseEvent } from 'react'

import { Tilt as Hamburger } from './Tilt'

import { Fade } from './Fade'
import { Sling } from './Sling'
import { Spin } from './Spin'
import { Squash } from './Squash'
import { Turn } from './Turn'
import { Twirl } from './Twirl'

export default Hamburger

export { Fade, Sling, Spin, Squash, Turn, Twirl }

export type BurgerDirection = 'left' | 'right';
export type RenderFunction = (o: RenderOptions) => any;
export type ToggleFunction = (newState: boolean) => any;
export type ToggleHandler = (isToggled: boolean) => any;

export interface CommonBurgerProps {
  /** The color of the icon bars, accepts any CSS-parsable argument. */
  color?: string;
  /** The animation direction of the icon, left or right. */
  direction?: BurgerDirection;
  /** The duration of the animation. Can be set to zero if no animation is desired. */
  duration?: number;
  /** Hides the default browser focus style. */
  hideOutline?: boolean;
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle?: ToggleHandler;
  /** Specifies if the icon bars should be rounded. */
  rounded?: boolean;
  /** A number between 12 and 48, which sets the size of the icon. */
  size?: number;
  /** A way to provide your own state - your state's setter */
  toggle?: ToggleFunction;
  /** A way to provide your own state - your state's value */
  toggled?: boolean;
}

export interface BurgerProps extends CommonBurgerProps {
  render: RenderFunction;
}

export interface RenderOptions {
  barHeight: number;
  barStyles: CSSProperties;
  burgerStyles: CSSProperties;
  handler: (e?: MouseEvent) => any;
  isLeft: boolean;
  isToggled: boolean;
  margin: number;
  move: number;
  /** CSS transition-duration property - in seconds */
  time: number;
  /** CSS transition-timing-function property */
  timing: string;
  /** CSS top property - in pixels */
  topOffset: number;
}
