import { LayoutDashboard, LucideProps, Camera } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ISidebarItemProps {
  title: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  onPress?: () => void;
  url?: string;
  as?: 'button' | 'a';
}

export const useSidebarItems = (): ISidebarItemProps[] => {
  return [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      as: 'a',
      url: '/robot/dashboard'
    },
    {
      title: 'Collect Images',
      icon: Camera,
      as: 'a',
      url: '/robot/collect-images'
    }
  ];
};
