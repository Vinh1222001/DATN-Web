import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, memo } from 'react';
import Button from '../button';
import { cn } from '@/lib/utils';

const VARIANTS = cva('fixed flex flex-col items-end space-y-2', {
  variants: {
    position: {
      'top-left': 'top-6 left-6',
      'top-right': 'top-6 right-6',
      'bottom-left': 'bottom-6 left-6',
      'bottom-right': 'bottom-6 right-6',
      center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    },
    direction: {
      up: 'flex-col-reverse',
      down: 'flex-col',
      left: 'flex-row-reverse',
      right: 'flex-row'
    },
    gap: {
      sm: 'space-y-2',
      md: 'space-y-3',
      lg: 'space-y-4'
    }
  },
  defaultVariants: {
    position: 'bottom-right',
    direction: 'up',
    gap: 'md'
  }
});

interface IFixedProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {
  onPress?: () => void;
}

const Fixed = forwardRef<HTMLDivElement, IFixedProps>((props, ref) => {
  const { children, className, onPress, position, direction, gap, ...rest } =
    props;
  return (
    <div
      ref={ref}
      className={cn(VARIANTS({ position, direction, gap }), className)}
      {...rest}
    >
      <Button size={'icon'} onClick={onPress} variant={'circle'}>
        {children}
      </Button>
    </div>
  );
});

Fixed.displayName = 'SpeedDial';

export default memo(Fixed);
