import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface IMutedProps extends HTMLAttributes<HTMLParagraphElement> {}

const Muted = forwardRef<HTMLParagraphElement, IMutedProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <p
      ref={ref}
      className={clsx('text-sm text-muted-foreground', className)}
      {...rest}
    >
      {children}
    </p>
  );
});

Muted.displayName = 'Muted';

export default memo(Muted);
