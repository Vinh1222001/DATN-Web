declare module 'ui' {
  import { ReactNode } from 'react';

  export interface ILayoutProps {
    children: ReactNode;
    params: Promise<any>;
  }

  export interface IPageProps extends Omit<ILayoutProps, 'children'> {}
}

declare module 'ref' {
  export interface ISocketRef {
    sendMessage: (message: string) => void;
  }
}
