import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, memo } from 'react';

const VARIANTS = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12'
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6'
    }
  },
  defaultVariants: {
    cols: 12,
    gap: 'md'
  }
});

interface IGridContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {}

const Container = forwardRef<HTMLDivElement, IGridContainerProps>(
  (props, ref) => {
    const { children, className, cols, gap, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn(VARIANTS({ cols, gap }), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'GridContainer';

export default memo(Container);
