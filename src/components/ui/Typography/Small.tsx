import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface ISmallProps extends HTMLAttributes<HTMLElement> {}

const Small = forwardRef<HTMLElement, ISmallProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <small
      ref={ref}
      className={clsx('text-sm font-medium leading-none', className)}
      {...rest}
    >
      {children}
    </small>
  );
});

Small.displayName = 'Small';

export default memo(Small);
