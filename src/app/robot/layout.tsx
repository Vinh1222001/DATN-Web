import { SidebarProvider } from '@/components/ui/sidebar';
import { memo } from 'react';
import { ILayoutProps } from 'ui';
import AppSideBar from './_components/AppSidebar';
import Flex from '@/components/ui/layouts/Flex';
import Box from '@/components/ui/layouts/Box';
import Header from './_components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robot Dashboard',
  description: ''
};

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <Flex className={'bg-neutral-200'} width={'full'}>
      <SidebarProvider>
        <AppSideBar />
        <Box>
          <Header />
          <Box className="p-3">{children}</Box>
        </Box>
      </SidebarProvider>
    </Flex>
  );
};

export default memo(Layout);
