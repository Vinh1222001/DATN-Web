import { Fragment, memo } from 'react';
import { ILayoutProps } from 'ui';

const Layout = (props: ILayoutProps) => {
  return <Fragment>{props.children}</Fragment>;
};

export default memo(Layout);
