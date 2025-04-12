import { memo } from 'react';
import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import VideoStream from '../../_components/VideoStream';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>
          ESP32-CAM Live Stream
        </Typography.Heading>
      </Paper.Header>

      <Paper.Content>
        <VideoStream url="/api/stream" alt="ESP32-CAM Live stream" />
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
