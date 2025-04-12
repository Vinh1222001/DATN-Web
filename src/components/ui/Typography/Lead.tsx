import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface ILeadProps extends HTMLAttributes<HTMLParagraphElement> {}

const Lead = forwardRef<HTMLParagraphElement, ILeadProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <p
      ref={ref}
      className={clsx('text-xl text-muted-foreground', className)}
      {...rest}
    >
      {children}
    </p>
  );
});

Lead.displayName = 'Lead';

export default memo(Lead);
