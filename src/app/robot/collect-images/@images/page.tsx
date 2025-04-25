'use client';
import { useGlobalRef } from '@/app/_components/providers/ref.video';
import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import JSZip from 'jszip';
import { memo, useCallback, useState } from 'react';
import { saveAs } from 'file-saver';
import Flex from '@/components/ui/layouts/Flex';
import { Button } from '@/components/ui/button';
import { Camera, ImageDown, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Box from '@/components/ui/layouts/Box';
import { clone, remove } from 'lodash';
import { Badge } from '@/components/ui/badge';

const Page = () => {
  const videoRef = useGlobalRef();
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  const onCapture = useCallback(() => {
    const video: any = videoRef.current;
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.width;
    canvas.height = video.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/jpeg');

    setCapturedImages(prev => [dataURL, ...prev]);
  }, [videoRef]);

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

  const onDelete = useCallback(
    (key: number | string) => {
      const images = clone(capturedImages);
      remove(images, (_, idx) => {
        console.log(idx);
        return idx === key;
      });
      setCapturedImages(images);
    },
    [capturedImages]
  );

  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Captured Images</Typography.Heading>
      </Paper.Header>
      <Paper.Content>
        <Flex className="gap-3" direction={'column'}>
          <Flex>
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
            <Flex>
              <Typography.Small>
                Total: {capturedImages.length}
              </Typography.Small>
            </Flex>
          </Flex>

          {capturedImages.length > 0 && (
            <Flex gap={'sm'} className="flex-wrap">
              {capturedImages.map((src, index) => (
                <Box key={index} className="relative  w-[200px] h-[200px]">
                  <Image
                    src={src}
                    alt={`Capture ${index + 1}`}
                    height={200}
                    width={200}
                    className="rounded border shadow"
                    unoptimized
                  />
                  <Flex
                    className="absolute top-0 right-0 p-1"
                    justifyContent={'between'}
                    alignItems={'center'}
                  >
                    <Badge variant={'secondary'} className="rounded-full">
                      {index}
                    </Badge>
                    <Button
                      variant="destructive"
                      size={'icon'}
                      onClick={() => onDelete(index)}
                    >
                      <Trash2 />
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Flex>
          )}
        </Flex>
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
