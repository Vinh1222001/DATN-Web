import Box from '@/components/ui/layouts/Box';
import List from '@/components/ui/layouts/List';
import Paper from '@/components/ui/layouts/Paper';
import Typography from '@/components/ui/Typography';
import { BadgeInfo } from 'lucide-react';
import React, { memo } from 'react';
import moment from 'moment';

const Page = () => {
  return (
    <Paper.Container>
      <Paper.Header>
        <Typography.Heading variant={'h2'}>Terminal</Typography.Heading>
      </Paper.Header>
      <Paper.Content>
        <Box className="bg-gray-200 py-1">
          <List.Container className="list-none">
            <List.Item>
              <Typography.InlineCode className="flex bg-transparent">
                <BadgeInfo /> [{moment().format('')}] Hello
              </Typography.InlineCode>
            </List.Item>
          </List.Container>
        </Box>
      </Paper.Content>
    </Paper.Container>
  );
};

export default memo(Page);
