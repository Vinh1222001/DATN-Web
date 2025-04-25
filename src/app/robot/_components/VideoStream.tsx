'use client';

import { useGlobalRef } from '@/app/_components/providers/ref.video';
import { useWebSocketContext } from '@/app/_components/providers/soket';
import Box from '@/components/ui/layouts/Box';
import { VideoStreamName } from '@/constants/video';
import { useVideoStream } from '@/hooks/core/useVideoStream';
import { forwardRef, memo, useEffect, useMemo, useRef } from 'react';

interface IProps {
  url?: string;
  alt?: string;
}

const VideoStream = forwardRef<any, IProps>((props, ref) => {
  const { alt, ...rest } = useVideoStream({
    ref,
    name: VideoStreamName.ESP32_CAM,
    url: props.url ?? '',
    alt: props.alt
  });

  // const { messages } = useWebSocketContext();
  // const box = useMemo(() => {
  //   const latest = [...messages].pop();
  //   return latest?.message?.productType ?? null;
  // }, [messages]);

  const videoRef = useGlobalRef(); // should point to <img>
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas || !videoRef.current || !box) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   canvas.width = 320;
  //   canvas.height = 320;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   const x = Number(box.x) * (320 / 96);
  //   const y = Number(box.y) * (320 / 96);
  //   const w = Number(box.width) * (320 / 96);
  //   const h = Number(box.height) * (320 / 96);

  //   ctx.strokeStyle = 'red';
  //   ctx.lineWidth = 2;
  //   ctx.strokeRect(x, y, w, h);

  //   if (box.label) {
  //     ctx.fillStyle = 'red';
  //     ctx.font = '14px Arial';
  //     ctx.fillText(
  //       `${box.label}${box.accuration ? ` (${(Number(box.accuration) * 100).toFixed(1)}%)` : ''}`,
  //       x + 4,
  //       y - 6
  //     );
  //   }
  // }, [box, videoRef]);

  return (
    <Box className="aspect-square bg-neutral-200 relative" width="full">
      {/* Video Stream as <img> tag */}
      <img
        ref={videoRef as any}
        {...rest}
        alt={alt}
        width={320}
        height={320}
        className="object-contain w-full h-full"
        crossOrigin="anonymous"
      />
      {/* Canvas for bounding boxes */}
      {/* <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
      /> */}
    </Box>
  );
});

VideoStream.displayName = 'VideoStream';

export default memo(VideoStream);
