declare module 'ui' {
  import { ReactNode } from 'react';

  export interface ILayoutProps {
    children: ReactNode;
    params?: Promise<any>;
  }

  export interface IPageProps extends Omit<ILayoutProps, 'children'> {}
}

declare module 'ref' {
  export interface ISocketRef {
    sendMessage: (message: string) => void;
  }
}

declare module 'hook' {
  export interface IUseVideoStreamProps {
    name: string;
    url: string;
    alt?: string;
  }
  export interface IUseVideoResult {
    ref: any;
    name: string;
    src: string;
    alt: string;
  }
}

declare module 'service' {
  import { SocketMessageType } from '@/constants/enum';
  export interface ISocketMessageSend {
    type: SocketMessageType;
    time: string;
    message: string;
  }

  export interface LineFollowerData {
    leftMost: number | string;
    left: number | string;
    center: number | string;
    right: number | string;
    rightMost: number | string;
    decision: string;
  }

  export interface ColorDetectorData {
    red: string;
    green: string;
    blue: string;
    color: string;
  }

  export interface ProductTypeData {
    label: string;
    accuration: number | string;
    x: number | string;
    y: numner | string;
    width: number | string;
    height: number | string;
  }

  export interface ISocketMessage {
    lineFollower?: LineFollowerData;
    colorDetector?: ColorDetectorData;
    productType?: ProductTypeData;
  }

  export interface ISocketMessageReceive {
    type: SocketMessageType;
    time: string;
    message: ISocketMessage;
  }
}
