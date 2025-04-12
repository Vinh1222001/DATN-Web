import { memo } from 'react';
import EspData from './_components/EspData';
import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Real Time Data</Typography.Heading>
      </Paper.Header>
      <Paper.Content>
        <EspData />
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
