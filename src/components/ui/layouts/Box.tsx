import { forwardRef, HTMLAttributes, memo } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { BASE_DEFAULT_VARIANTS, BASE_VARIANTS } from '../constants';

const VARIANTS = cva('', {
  variants: BASE_VARIANTS,
  defaultVariants: BASE_DEFAULT_VARIANTS
});

interface IBoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {}

const Box = forwardRef<HTMLDivElement, IBoxProps>(
  (
    { children, className, width, height, minHeight, minWidth, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          VARIANTS({ width, height, minHeight, minWidth }),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';
export default memo(Box);
