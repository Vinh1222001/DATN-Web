import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { memo } from 'react';
import { ILayoutProps } from 'ui';
import AppSideBar from './_components/AppSidebar';
import Flex from '@/components/ui/layouts/Flex';
import Box from '@/components/ui/layouts/Box';

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <Flex className={'bg-neutral-200'} width={'full'}>
      <SidebarProvider>
        <AppSideBar />
        <Box>
          <header className="px-3">
            <SidebarTrigger />
          </header>
          <Box className="p-3">{children}</Box>
        </Box>
      </SidebarProvider>
    </Flex>
  );
};

export default memo(Layout);
