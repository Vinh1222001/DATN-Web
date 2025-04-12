import { forwardRef, HTMLAttributes, memo } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { BASE_VARIANTS, BASE_DEFAULT_VARIANTS } from '../constants';

const VARIANTS = cva('flex', {
  variants: {
    ...BASE_VARIANTS,
    justifyContent: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
      baseline: 'justify-baseline',
      normal: 'justify-normal'
    },
    justifySelf: {
      auto: 'justify-self-auto',
      start: 'justify-self-start',
      end: 'justify-self-end',
      center: 'justify-self-center',
      stretch: 'justify-self-stretch'
    },
    alignItems: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch'
    },
    alignSelf: {
      auto: 'self-auto',
      start: 'self-start',
      end: 'self-end',
      center: 'self-center',
      stretch: 'self-stretch',
      baseline: 'self-baseline'
    },
    alignContent: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      between: 'content-between',
      around: 'content-around',
      evenly: 'content-evenly',
      stretch: 'content-stretch',
      baseline: 'content-baseline',
      normal: 'content-normal'
    },
    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      column: 'flex-col',
      columnReverse: 'flex-col-reverse',
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap'
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6'
    }
  },
  defaultVariants: {
    ...BASE_DEFAULT_VARIANTS,
    alignContent: 'normal',
    alignItems: 'baseline',
    alignSelf: 'baseline',
    justifyContent: 'normal',
    justifySelf: 'start',
    gap: 'sm',
    direction: 'row'
  }
});

interface IFlexProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {}

const Flex = forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {
  const {
    children,
    className,
    justifyContent,
    justifySelf,
    alignContent,
    alignItems,
    alignSelf,
    direction,
    width,
    height,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    gap,
    ...rest
  } = props;
  return (
    <div
      ref={ref}
      className={cn(
        VARIANTS({
          gap,
          direction,
          justifySelf,
          justifyContent,
          alignContent,
          alignItems,
          alignSelf,
          width,
          height,
          minHeight,
          minWidth,
          maxHeight,
          maxWidth
        }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
export default memo(Flex);
