import { forwardRef, HTMLAttributes, memo, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';

const GAP_SIZES = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6'
} as const;

const VARIANTS = cva('flex flex-col', {
  variants: {
    gap: GAP_SIZES
  },
  defaultVariants: {
    gap: 2
  }
});

interface PaperFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {
  hasSeparator?: boolean;
  separatorSlot?: ReactNode;
}

const PaperFooter = forwardRef<HTMLDivElement, PaperFooterProps>(
  (
    {
      className,
      gap,
      hasSeparator = true,
      separatorSlot = <Separator />,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(VARIANTS({ gap }), className)} {...rest}>
        {hasSeparator && separatorSlot}
        {children}
      </div>
    );
  }
);

PaperFooter.displayName = 'PaperFooter';

export default memo(PaperFooter);
