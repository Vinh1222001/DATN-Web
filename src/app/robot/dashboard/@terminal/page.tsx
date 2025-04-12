import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import React, { memo } from 'react';
import Terminal from './_components/Terminal';
import { SquareTerminal } from 'lucide-react';
import Flex from '@/components/ui/layouts/Flex';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Flex>
          <SquareTerminal />
          <Typography.Heading variant={'h2'}>Terminal</Typography.Heading>
        </Flex>
      </Paper.Header>
      <Paper.Content>
        <Terminal />
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
