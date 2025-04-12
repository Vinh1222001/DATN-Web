import { forwardRef, memo, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const HEIGHTS = {
  screen: 'h-screen',
  full: 'h-full',
  auto: 'h-auto',
  '0': 'h-0',
  '1': 'h-1',
  '2': 'h-2',
  '4': 'h-4',
  '8': 'h-8',
  '16': 'h-16',
  '32': 'h-32',
  '64': 'h-64'
} as const;

const WIDTHS = {
  screen: 'w-screen',
  full: 'w-full',
  auto: 'w-auto',
  '0': 'w-0',
  '1': 'w-1',
  '2': 'w-2',
  '4': 'w-4',
  '8': 'w-8',
  '16': 'w-16',
  '32': 'w-32',
  '64': 'w-64'
} as const;

const PADDINGS = {
  '0': 'p-0',
  '1': 'p-1',
  '2': 'p-2',
  '4': 'p-4',
  '8': 'p-8',
  '16': 'p-16',
  '32': 'p-32'
} as const;

const VARIANTS = cva('', {
  variants: {
    height: HEIGHTS,
    minHeight: Object.fromEntries(
      Object.entries(HEIGHTS).map(([key, value]) => [key, `min-${value}`])
    ),
    width: WIDTHS,
    minWidth: Object.fromEntries(
      Object.entries(WIDTHS).map(([key, value]) => [key, `min-${value}`])
    )
  }
});

interface PaperContentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {
  padding?:
    | keyof typeof PADDINGS
    | Partial<
        Record<'top' | 'bottom' | 'left' | 'right', keyof typeof PADDINGS>
      >;
}

const PaperContent = forwardRef<HTMLDivElement, PaperContentProps>(
  (
    {
      className,
      height,
      minHeight,
      width,
      minWidth,
      padding,
      children,
      ...rest
    },
    ref
  ) => {
    const paddingClasses =
      typeof padding === 'string'
        ? PADDINGS[padding]
        : padding
          ? Object.entries(padding)
              .map(([key, value]) =>
                value ? `p${key.charAt(0)}-${value}` : ''
              )
              .filter(Boolean)
              .join(' ')
          : '';

    return (
      <div
        ref={ref}
        className={cn(
          VARIANTS({ height, minHeight, width, minWidth }),
          paddingClasses,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

PaperContent.displayName = 'PaperContent';

export default memo(PaperContent);
