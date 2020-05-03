import React, { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Tilt as Hamburger } from './Tilt'

import { Cross } from './Cross'
import { Fade } from './Fade'
import { Pivot } from './Pivot'
import { Rotate } from './Rotate'
import { Slant } from './Slant'
import { Sling } from './Sling'
import { Spin } from './Spin'
import { Spiral } from './Spiral'
import { Squash } from './Squash'
import { Squeeze } from './Squeeze'
import { Turn } from './Turn'
import { Twirl } from './Twirl'

export default Hamburger

export { Cross, Fade, Pivot, Rotate, Slant, Sling, Spin, Spiral, Squash, Squeeze, Turn, Twirl }

export interface CommonBurgerProps {
  /** The color of the icon bars, accepts any CSS-parsable argument. */
  color?: string;
  /** The animation direction of the icon, left or right. */
  direction?: 'left' | 'right';
  /** The vertical distance between the lines. Small (sm), medium (md) or large (lg). */
  distance?: 'sm' | 'md' | 'lg';
  /** The duration of the animation. Can be set to zero if no animation is desired. */
  duration?: number;
  /** Hides the default browser focus style. */
  hideOutline?: boolean;
  /** An ARIA label to improve accessibility. */
  label?: string;
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle?: (toggled: boolean) => any;
  /** Specifies if the icon bars should be rounded. */
  rounded?: boolean;
  /** A number between 12 and 48, which sets the size of the icon. */
  size?: number;
  /** A way to provide your own state action. Has to be used together with a state value (the `toggled` prop). */
  toggle?: Dispatch<SetStateAction<boolean>>
  /** A way to provide your own state value. Can be used together with a state action (the `toggle` prop). */
  toggled?: boolean;
  /** Only for internal use. */
  _lines?: number;
}

export interface RenderOptions {
  barHeight: number;
  barStyles: CSSProperties;
  burgerStyles: CSSProperties;
  handler: () => void;
  isLeft: boolean;
  isToggled: boolean;
  label: string | undefined;
  margin: number;
  move: number;
  /** CSS transition-duration property (in seconds). */
  time: number;
  /** CSS transition-timing-function property. */
  timing: string;
  /** CSS top property (in pixels). */
  topOffset: number;
}

export interface BurgerProps extends CommonBurgerProps {
  render: (o: RenderOptions) => React.ReactNode;
}
