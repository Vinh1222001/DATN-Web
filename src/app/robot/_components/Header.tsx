import Box from '@/components/ui/layouts/Box';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { memo } from 'react';

const Header = () => {
  return (
    <header>
      <Box className="px-3">
        <SidebarTrigger />
      </Box>
    </header>
  );
};

export default memo(Header);
