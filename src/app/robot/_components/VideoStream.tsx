import Box from '@/components/ui/layouts/Box';
import Image from 'next/image';
import { forwardRef, memo } from 'react';

interface IProps {
  url: string;
  alt?: string;
}

const VideoStream = forwardRef<HTMLImageElement, IProps>((props, ref) => {
  return (
    <Box className={'aspect-square bg-neutral-200'} width={'full'}>
      <Image
        ref={ref}
        src={props.url}
        alt={props.alt ?? 'video stream'}
        unoptimized
        width={200}
        height={200}
      />
    </Box>
  );
});

VideoStream.displayName = 'VideoStream';

export default memo(VideoStream);
