import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, memo } from 'react';

const VARIANTS = cva('scroll-m-20', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: ' text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight'
    },
    upperCase: {
      false: null,
      true: 'uppercase'
    },
    lowerCase: {
      false: null,
      true: 'lowercase'
    },
    capitalize: {
      false: null,
      true: 'capitalize'
    }
  },
  defaultVariants: {
    variant: 'h1',
    upperCase: false,
    lowerCase: false,
    capitalize: false
  }
});

interface IHeadingProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof VARIANTS> {}

const Heading = forwardRef<HTMLHeadingElement, IHeadingProps>((props, ref) => {
  const {
    children,
    className,
    variant,
    upperCase,
    lowerCase,
    capitalize,
    ...rest
  } = props;

  const Tag = 'h1';

  return (
    <Tag
      ref={ref}
      className={cn(
        VARIANTS({ variant, lowerCase, upperCase, capitalize, className })
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});

Heading.displayName = 'Heading';

export default memo(Heading);
