import { CSSProperties, Dispatch, SetStateAction, ReactNode } from 'react'
import { Tilt as Hamburger } from './components/Tilt'

import { Cross } from './components/Cross'
import { Divide } from './components/Divide'
import { Fade } from './components/Fade'
import { Pivot } from './components/Pivot'
import { Rotate } from './components/Rotate'
import { Slant } from './components/Slant'
import { Sling } from './components/Sling'
import { Spin } from './components/Spin'
import { Spiral } from './components/Spiral'
import { Squash } from './components/Squash'
import { Squeeze } from './components/Squeeze'
import { Turn } from './components/Turn'
import { Twirl } from './components/Twirl'

export default Hamburger

export {
  Cross,
  Divide,
  Fade,
  Pivot,
  Rotate,
  Slant,
  Sling,
  Spin,
  Spiral,
  Squash,
  Squeeze,
  Turn,
  Twirl
}

export interface CommonBurgerProps {
  /** The color of the icon bars, accepts any CSS-parsable argument. */
  color?: string
  /** The animation direction of the icon, left or right. */
  direction?: 'left' | 'right'
  /** The vertical distance between the lines. Small (sm), medium (md) or large (lg). */
  distance?: 'sm' | 'md' | 'lg'
  /** The duration of the animation. Can be set to zero if no animation is desired. */
  duration?: number
  /** A valid `transition-timing-function` CSS value, for example 'ease-out'. */
  easing?: string
  /** Hides the default browser focus style. */
  hideOutline?: boolean
  /** An ARIA label to improve accessibility. */
  label?: string
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle?: (toggled: boolean) => any
  /** Specifies if the icon bars should be rounded. */
  rounded?: boolean
  /** A number between 12 and 48, which sets the size of the icon. */
  size?: number
  /** A way to provide your own state action. Has to be used together with a state value (the `toggled` prop). */
  toggle?: Dispatch<SetStateAction<boolean>>
  /** A way to provide your own state value. Can be used together with a state action (the `toggle` prop). */
  toggled?: boolean
  /** A number which sets the width of the single Hamburger line. */
  lineWidth?: number
}

export interface RenderOptions {
  barHeight: number
  barStyles: CSSProperties
  burgerStyles: CSSProperties
  handler: () => void
  isLeft: boolean
  isToggled: boolean
  label: string | undefined
  margin: number
  move: number
  time: number
  easing: string
  topOffset: number
  width: number
}

export interface BurgerProps extends CommonBurgerProps {
  render: (o: RenderOptions) => ReactNode
  lines?: number
}
