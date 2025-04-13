'use client';
import Box from '@/components/ui/layouts/Box';
import { VideoStreamName } from '@/constants/video';
import { useVideoStream } from '@/hooks/core/useVideoStream';
import Image from 'next/image';
import { memo } from 'react';

interface IProps {
  url: string;
  alt?: string;
}

const VideoStream = (props: IProps) => {
  const { alt, ...rest } = useVideoStream({
    name: VideoStreamName.ESP32_CAM,
    url: props.url,
    alt: props.alt
  });

  return (
    <Box className={'aspect-square bg-neutral-200'} width={'full'}>
      <Image {...rest} alt={alt} unoptimized width={500} height={500} />
    </Box>
  );
};

export default memo(VideoStream);
