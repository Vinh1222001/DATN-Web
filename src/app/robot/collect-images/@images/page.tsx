import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import { memo } from 'react';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Captured Images</Typography.Heading>
      </Paper.Header>
      <Paper.Content></Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
