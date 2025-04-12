'use client';
import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import { memo, useCallback, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import Box from '@/components/ui/layouts/Box';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Camera, ImageDown, Trash2 } from 'lucide-react';
import Flex from '@/components/ui/layouts/Flex';
import VideoStream from '../../_components/VideoStream';

const Page = () => {
  const videoRef = useRef<HTMLImageElement>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  // Capture current frame from stream
  const onCapture = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.width;
    canvas.height = video.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/jpeg');

    setCapturedImages(prev => [dataURL, ...prev]);
  }, []);

  const onDownloadAll = useCallback(async () => {
    const zip = new JSZip();

    capturedImages.forEach((dataURL, i) => {
      const base64 = dataURL.replace(/^data:image\/(png|jpeg);base64,/, '');
      zip.file(`image_${i + 1}.jpg`, base64, { base64: true });
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'esp32-captures.zip');
  }, [capturedImages]);

  const onClearAll = useCallback(() => {
    if (confirm('Are you sure you want to delete all captured images?')) {
      setCapturedImages([]);
    }
  }, []);
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Camera</Typography.Heading>
      </Paper.Header>
      <Paper.Content>
        <Flex className="gap-3" direction={'column'}>
          <VideoStream
            ref={videoRef}
            url="/api/stream"
            alt="ESP32-CAM live stream"
          />

          <Flex>
            <Button
              onClick={onCapture}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <Camera /> Capture Frame
            </Button>
            <Button
              onClick={onDownloadAll}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              <ImageDown /> Download All
            </Button>
            <Button
              onClick={onClearAll}
              disabled={capturedImages.length === 0}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
            >
              <Trash2 /> Clear All
            </Button>
          </Flex>

          {capturedImages.length > 0 && (
            <Box>
              <Box className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {capturedImages.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Capture ${index + 1}`}
                    fill
                    className="rounded border shadow"
                    unoptimized
                  />
                ))}
              </Box>
            </Box>
          )}
        </Flex>
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
