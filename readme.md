<p align="center">
  <img alt="Logo" src="docs/static/logo-readme.png" height="91" width="112">
  <h1 align="center">Animated hamburger menu icons for React</h1>
</p>

[Hamburger icons](https://hamburger-react.netlify.app) with CSS-driven transitions, created to be as elegant and performant as possible. This means no JavaScript animations, no transitions on non-cheap properties and a small size.

## Installation
```sh
npm install hamburger-react
```

## Size
When using one hamburger, ~1.5 KB will be added to your bundle (min + gzip).

## Usage
[Visit the website](https://hamburger-react.netlify.app) for full documentation, API and examples. A basic implementation looks as follows:

```js
import Hamburger from 'hamburger-react'
```
```js
const [isOpen, setOpen] = useState(false)
```
```js
<Hamburger toggled={isOpen} toggle={setOpen} />
```

## Yet another hamburger library?
Yes. The decision to create this small package was made because existing solutions seem to have one or more of the following problems:

- Animations that don't feel natural
- Transitions on expensive properties (jerky animations)
- No React support
- Size (additional dependencies besides React or no tree shaking)
- Not customizable, or too customizable (no sensible defaults)
- Doing too much

## Accessibility
It is recommended to have a tap/click area of at least 48x48 pixels. Therefore, padding will be added around the icon to create a surface of exactly this size.

Keyboard interaction is provided with the `enter` key, and the icon element has the recommended accessibility attributes (such as `role`). You can use the `label` property to supply an ARIA label for the icon.

## Support
The icons are hooks-based, and will work with React 16.8.0 ('the one with hooks') or higher.

## Credits
Logo by [Stutpak](https://www.stutpak.nl).
