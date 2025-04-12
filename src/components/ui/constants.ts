export const WIDTH = {
  auto: 'w-auto',
  full: 'w-full',
  screen: 'w-screen',
  min: 'w-min',
  max: 'w-max',
  fit: 'w-fit',
  '0': 'w-0',
  px: 'w-px',
  '0.5': 'w-0.5',
  '1': 'w-1',
  '1.5': 'w-1.5',
  '2': 'w-2',
  '2.5': 'w-2.5',
  '3': 'w-3',
  '4': 'w-4',
  '5': 'w-5',
  '6': 'w-6',
  '8': 'w-8',
  '10': 'w-10',
  '12': 'w-12',
  '16': 'w-16',
  '20': 'w-20',
  '24': 'w-24',
  '32': 'w-32',
  '40': 'w-40',
  '48': 'w-48',
  '56': 'w-56',
  '64': 'w-64',
  '72': 'w-72',
  '80': 'w-80',
  '96': 'w-96',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '2/3': 'w-2/3',
  '1/4': 'w-1/4',
  '3/4': 'w-3/4',
  '1/5': 'w-1/5',
  '2/5': 'w-2/5',
  '3/5': 'w-3/5',
  '4/5': 'w-4/5',
  '1/6': 'w-1/6',
  '2/6': 'w-2/6',
  '3/6': 'w-3/6',
  '4/6': 'w-4/6',
  '5/6': 'w-5/6'
} as const;

export const MIN_WIDTH = {
  full: 'min-w-full',
  screen: 'min-w-screen',
  min: 'min-w-min',
  max: 'min-w-max',
  fit: 'min-w-fit'
} as const;

export const MAX_WIDTH = {
  full: 'max-w-full',
  screen: 'max-w-screen',
  min: 'max-w-min',
  max: 'max-w-max',
  fit: 'max-w-fit',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
} as const;

export const HEIGHT = {
  auto: 'h-auto',
  full: 'h-full',
  screen: 'h-screen',
  min: 'h-min',
  max: 'h-max',
  fit: 'h-fit',
  '0': 'h-0',
  px: 'h-px',
  '1': 'h-1',
  '2': 'h-2',
  '4': 'h-4',
  '8': 'h-8',
  '12': 'h-12',
  '16': 'h-16',
  '24': 'h-24',
  '32': 'h-32',
  '40': 'h-40',
  '48': 'h-48',
  '56': 'h-56',
  '64': 'h-64',
  '72': 'h-72',
  '80': 'h-80',
  '96': 'h-96'
} as const;

export const MIN_HEIGHT = {
  full: 'min-h-full',
  screen: 'min-h-screen',
  min: 'min-h-min',
  max: 'min-h-max',
  fit: 'min-h-fit'
} as const;

export const MAX_HEIGHT = {
  full: 'max-h-full',
  screen: 'max-h-screen',
  min: 'max-h-min',
  max: 'max-h-max',
  fit: 'max-h-fit',
  '0': 'max-h-0',
  '16': 'max-h-16',
  '32': 'max-h-32',
  '48': 'max-h-48',
  '64': 'max-h-64',
  '80': 'max-h-80',
  '96': 'max-h-96'
} as const;

export const BASE_VARIANTS = {
  width: WIDTH,
  height: HEIGHT,
  maxWidth: MAX_WIDTH,
  maxHeight: MAX_HEIGHT,
  minWidth: MIN_WIDTH,
  minHeight: MIN_HEIGHT
} as const;

export const BASE_DEFAULT_VARIANTS = {
  width: 'full' as keyof typeof WIDTH,
  height: 'auto' as keyof typeof HEIGHT,
  maxWidth: 'full' as keyof typeof MAX_WIDTH,
  maxHeight: 'full' as keyof typeof MAX_HEIGHT,
  minWidth: 'min' as keyof typeof MIN_WIDTH,
  minHeight: 'min' as keyof typeof MIN_HEIGHT
};
