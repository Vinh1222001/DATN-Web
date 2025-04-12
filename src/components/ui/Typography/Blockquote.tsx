import { BlockquoteHTMLAttributes, forwardRef, memo } from 'react';
import clsx from 'clsx';

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {}

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <blockquote
        ref={ref}
        className={clsx(
          'mt-6 border-l-2 pl-6 italic text-gray-700 dark:text-gray-300',
          className
        )}
        {...rest}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';

export default memo(Blockquote);
