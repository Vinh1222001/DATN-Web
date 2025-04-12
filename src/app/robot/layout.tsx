import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { memo } from 'react';
import { ILayoutProps } from 'ui';
import AppSideBar from './_components/AppSidebar';

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <div className="w-full">
      <SidebarProvider>
        <AppSideBar />
        <div>
          <header>
            <SidebarTrigger />
          </header>
          <div>{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default memo(Layout);
