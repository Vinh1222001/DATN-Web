import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface IInlineCodeProps extends HTMLAttributes<HTMLElement> {}

const InlineCode = forwardRef<HTMLElement, IInlineCodeProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <code
      ref={ref}
      className={clsx(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
});

InlineCode.displayName = 'InlineCode';

export default memo(InlineCode);
