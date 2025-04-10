import { memo, ReactNode } from 'react';
import { ILayoutProps } from 'ui';

interface IProps extends ILayoutProps {
  data: ReactNode;
  stream: ReactNode;
}

const Layout = (props: IProps) => {
  const { children, data, stream } = props;
  return (
    <div className="flex">
      <div>{children}</div>
      <div>{data}</div>
      <div>{stream}</div>
    </div>
  );
};

export default memo(Layout);
