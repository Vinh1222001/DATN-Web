import { forwardRef, HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

interface IListContainerProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ul' | 'ol';
}

const Container = forwardRef<
  HTMLUListElement | HTMLOListElement,
  IListContainerProps
>((props, ref) => {
  const { as: Component = 'ul', className, children, ...rest } = props;
  return (
    <Component
      ref={ref as any}
      className={clsx('my-6 ml-0 list-disc [&>li]:mt-2', className, {
        'list-decimal': Component === 'ol',
        'list-disc': Component === 'ul'
      })}
      {...rest}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'TypographyList';

export default memo(Container);
