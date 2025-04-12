import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface ILargeProps extends HTMLAttributes<HTMLDivElement> {}

const Large = forwardRef<HTMLDivElement, ILargeProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div
      ref={ref}
      className={clsx('text-lg font-semibold', className)}
      {...rest}
    >
      {children}
    </div>
  );
});

Large.displayName = 'Large';

export default memo(Large);
