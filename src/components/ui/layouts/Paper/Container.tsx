import { forwardRef, memo } from 'react';
import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { BASE_DEFAULT_VARIANTS, BASE_VARIANTS } from '../../constants';

const VARIANTS = cva('bg-neutral-100 dark:bg-zinc-900 rounded-lg', {
  variants: {
    ...BASE_VARIANTS,
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    },
    padding: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6'
    }
  },
  defaultVariants: {
    ...BASE_DEFAULT_VARIANTS,
    shadow: 'md',
    padding: 'md'
  }
});

interface IPaperContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {}

const Container = forwardRef<HTMLDivElement, IPaperContainerProps>(
  (
    {
      children,
      className,
      shadow,
      padding,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          VARIANTS({
            shadow,
            padding,
            width,
            minWidth,
            maxWidth,
            height,
            minHeight,
            maxHeight
          }),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'PaperContainer';

export default memo(Container);
