'use client';
import { useWebSocketContext } from '@/app/_components/providers/soket';
import Box from '@/components/ui/layouts/Box';
import Flex from '@/components/ui/layouts/Flex';
import List from '@/components/ui/layouts/List';
import Typography from '@/components/ui/Typography';
import { SocketMessageType } from '@/constants/enum';
import { BadgeInfo, CircleX, TriangleAlert } from 'lucide-react';
import { memo, useEffect, useRef } from 'react';
import { ISocketMessageReceive } from 'service';

const Terminal = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { messages } = useWebSocketContext();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box className="bg-gray-200">
      <List.Container className="list-none overflow-auto h-[500px] py-1">
        {messages.map((msg: ISocketMessageReceive, idx: number) => (
          <List.Item key={`terminal-${idx}`} className="mt-3 w-[500]">
            <Flex direction={'column'}>
              <Flex alignContent={'center'}>
                {msg.type === SocketMessageType.INFO ? (
                  <BadgeInfo />
                ) : msg.type === SocketMessageType.WARNING ? (
                  <TriangleAlert />
                ) : (
                  <CircleX />
                )}
                <Typography.Muted>[{msg.time}]</Typography.Muted>
              </Flex>
              <Typography.Small className="flex bg-transparent pl-2 text-wrap">
                {JSON.stringify(msg.message)}
              </Typography.Small>
            </Flex>
          </List.Item>
        ))}
        <div ref={bottomRef} />
      </List.Container>
    </Box>
  );
};

export default memo(Terminal);
