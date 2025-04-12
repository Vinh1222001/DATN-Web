import { forwardRef, LiHTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface IListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

const Item = forwardRef<HTMLLIElement, IListItemProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <li ref={ref} className={clsx('mt-2', className)} {...rest}>
        {children}
      </li>
    );
  }
);

Item.displayName = 'TypographyListItem';

export default memo(Item);
