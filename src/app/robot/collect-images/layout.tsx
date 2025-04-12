import Grid from '@/components/ui/layouts/Grid';
import { Metadata } from 'next';
import { memo, ReactNode } from 'react';
import { ILayoutProps } from 'ui';

export const metadata: Metadata = {
  title: 'Collect Images',
  description: 'Collect Images from Esp32 CAM'
};

export interface IProps extends ILayoutProps {
  camera: ReactNode;
  images: ReactNode;
}

const Layout = (props: IProps) => {
  const { camera, images } = props;
  return (
    <Grid.Container>
      <Grid.Item colSpan={4}>{camera}</Grid.Item>
      <Grid.Item colSpan={8}>{images}</Grid.Item>
    </Grid.Container>
  );
};

export default memo(Layout);
