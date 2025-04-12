// context/WebSocketContext.tsx
'use client';
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect
} from 'react';
import { ISocketMessageReceive, ISocketMessageSend } from 'service';
import moment from 'moment';
import { drop } from 'lodash';
import { MAX_MESSAGE_QUEUE, SOCK_TIME_FORMAT } from '@/constants/services';
import { SocketMessageType } from '@/constants/enum';

type WebSocketContextType = {
  messages: ISocketMessageReceive[];
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const useWebSocketContext = (): WebSocketContextType => {
  const ctx = useContext(WebSocketContext);
  if (!ctx)
    throw new Error(
      'useWebSocketContext must be used within WebSocketProvider'
    );
  return ctx;
};

export const WebSocketProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<ISocketMessageReceive[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      String(process.env.NEXT_PUBLIC_WEB_SOCKET_URL) ?? 'ws://localhost:8081'
    );
    socketRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
      const msg: ISocketMessageSend = {
        time: moment().format(SOCK_TIME_FORMAT),
        type: SocketMessageType.INFO,
        message: 'Hello from Next.js!'
      };
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = event => {
      console.log('Message from server:', JSON.parse(event.data));
      const data = JSON.parse(event?.data);
      const message: ISocketMessageReceive = {
        time: data?.time ?? moment().format(SOCK_TIME_FORMAT),
        type: data?.type ?? SocketMessageType.INFO,
        message: data?.message ?? data
      };
      setMessages(prev => [
        ...(prev.length >= MAX_MESSAGE_QUEUE ? drop(prev) : prev),
        message
      ]);
    };

    ws.onerror = err => console.error('WebSocket error', err);
    ws.onclose = () => console.log('WebSocket disconnected');

    return () => ws.close();
  }, []);

  return (
    <WebSocketContext.Provider value={{ messages }}>
      {children}
    </WebSocketContext.Provider>
  );
};
