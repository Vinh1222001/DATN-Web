import { memo } from 'react';

const Page = () => {
  return <div>{process.env.NEXT_PUBLIC_ESP32_CAM_URL}</div>;
};

export default memo(Page);
