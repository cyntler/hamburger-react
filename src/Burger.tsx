import { CSSProperties, FunctionComponent, useState } from 'react';
import { BurgerProps } from './';

const AREA = 48;

export const Burger: FunctionComponent<BurgerProps> = ({
  color = 'currentColor',
  direction = 'left',
  distance = 'md',
  duration = 0.4,
  easing = 'cubic-bezier(0, 0, 0, 1)',
  hideOutline = true,
  label,
  lines = 3,
  onToggle,
  render,
  rounded = false,
  size = 32,
  toggle,
  toggled,
}) => {
  const [toggledInternal, toggleInternal] = useState(false);

  const width = Math.max(12, Math.min(AREA, size));
  const room = Math.round((AREA - width) / 2);

  const barHeightRaw = width / 12;
  const barHeight = Math.round(barHeightRaw);

  const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5;
  const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
  const margin = Math.round(marginRaw);

  const height = barHeight * lines + margin * (lines - 1);
  const topOffset = Math.round((AREA - height) / 2);

  const translate =
    lines === 3
      ? distance === 'lg'
        ? 4.0425
        : distance === 'sm'
        ? 5.1625
        : 4.6325
      : distance === 'lg'
      ? 6.7875
      : distance === 'sm'
      ? 8.4875
      : 7.6675;
  const deviation =
    (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2));
  const time = Math.max(0, duration);

  const burgerStyles: CSSProperties = {
    cursor: 'pointer',
    height: `${AREA}px`,
    position: 'relative',
    transition: `${time}s ${easing}`,
    userSelect: 'none',
    width: `${AREA}px`,
  };

  const barStyles: CSSProperties = {
    background: color,
    height: `${barHeight}px`,
    left: `${room}px`,
    position: 'absolute',
    width: `${width}px`,
  };

  if (hideOutline) {
    burgerStyles['outline'] = 'none';
  }

  if (rounded) {
    barStyles['borderRadius'] = '9em';
  }

  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;

  const handler = () => {
    toggleFunction(!isToggled);

    if (typeof onToggle === 'function') onToggle(!isToggled);
  };

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    easing,
    handler,
    isLeft: direction === 'left',
    isToggled,
    label,
    margin,
    move,
    time,
    topOffset,
    width,
  });
};
