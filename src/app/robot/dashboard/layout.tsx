import Grid from '@/components/ui/layouts/Grid';
import { memo, ReactNode } from 'react';
import { ILayoutProps } from 'ui';

interface IProps extends ILayoutProps {
  data: ReactNode;
  stream: ReactNode;
  terminal: ReactNode;
}

const Layout = (props: IProps) => {
  const { data, stream, terminal } = props;
  return (
    <Grid.Container>
      <Grid.Item colSpan={4}>{stream}</Grid.Item>
      <Grid.Item colSpan={4}>{data}</Grid.Item>
      <Grid.Item colSpan={4}>{terminal}</Grid.Item>
    </Grid.Container>
  );
};

export default memo(Layout);
