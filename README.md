# Animated hamburger icons for React
Hamburger icons with CSS-driven transitions. Created to be as performant, elegant and widely supported as possible. This means no SVG/JavaScript animations or transitions on non-cheap properties.

## Yet another hamburger library?
Yes. The decision to create this small package was made because existing solutions seem to have one or more of the following problems:

- Animations that didn't feel natural
- Transitions on expensive properties
- No React support
- Size (additional dependencies besides React)
- Not customizable, or too customizable (no sensible defaults)

## Installation
```sh
npm i hamburger-react
```

## Usage

## Accessibility
It is recommended to have a tap/click area of at least 48x48 pixels. Therefore, padding will be added around the icon to create a surface of exactly this size.

Keyboard interaction is provided with the `enter` key, and the icon element has the recommended accessibility attributes (such as `role`).
