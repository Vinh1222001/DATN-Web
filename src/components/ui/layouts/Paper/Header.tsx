import { forwardRef, memo, ReactNode, HTMLAttributes } from 'react';
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

const VARIANTS = cva('flex flex-col mb-2', {
  variants: {
    gap: GAP_SIZES
  },
  defaultVariants: {
    gap: 2
  }
});

interface PaperHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VARIANTS> {
  hasSeparator?: boolean;
  separatorSlot?: ReactNode;
}

const PaperHeader = forwardRef<HTMLDivElement, PaperHeaderProps>(
  (
    { className, gap, hasSeparator = true, separatorSlot, children, ...rest },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(VARIANTS({ gap }), className)} {...rest}>
        {children}
        {hasSeparator &&
          (separatorSlot ?? (
            <Separator className="bg-zinc-300 dark:bg-zinc-800 min-h-0.5" />
          ))}
      </div>
    );
  }
);

PaperHeader.displayName = 'PaperHeader';

export default memo(PaperHeader);
