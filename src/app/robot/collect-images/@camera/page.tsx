import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import { memo } from 'react';
import Flex from '@/components/ui/layouts/Flex';
import VideoStream from '../../_components/VideoStream';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Camera</Typography.Heading>
      </Paper.Header>
      <Paper.Content>
        <Flex className="gap-3" direction={'column'}>
          <VideoStream url="/api/stream" alt="ESP32-CAM live stream" />
        </Flex>
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
