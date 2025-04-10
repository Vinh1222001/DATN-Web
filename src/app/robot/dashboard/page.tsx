import { memo } from 'react';
import { IPageProps } from 'ui';
import SocketWrapper from './_components/Socket';

const Page = (props: IPageProps) => {
  return (
    <div>
      {process.env.NEXT_PUBLIC_ESP32_CAM_URL ?? 'Hell'}
      <SocketWrapper />
      <img src="/api/stream" alt="ESP32 Stream proxy" />
    </div>
  );
};

export default memo(Page);
