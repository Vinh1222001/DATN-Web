import clsx from 'clsx';
import { forwardRef, HTMLAttributes, memo } from 'react';

interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <p
        ref={ref}
        className={clsx('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...rest}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default memo(Paragraph);
