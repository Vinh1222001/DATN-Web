import { socketRef } from '@/app/constants';
import { useMount } from '../core/useMount';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export const useSocket = () => {
  const [message, setMessage] = useState<string>('');

  useMount(() => {
    const ws = new WebSocket(
      String(process.env.NEXT_PUBLIC_WEB_SOCKET_URL) ?? 'ws://localhost:8081'
    );

    socketRef.current = ws;
    ws.onopen = () => {
      console.log('WebSocket connected');
      ws.send('Connected from Web');
    };

    ws.onmessage = event => {
      console.log('Message from server:', event.data);
      try {
        setMessage(JSON.parse(event.data));
      } catch (err: any) {
        console.error('Invalid JSON received', { rawData: event.data, err });
      }
    };

    ws.onerror = err => console.error('WebSocket error', err);
    ws.onclose = () => console.log('WebSocket disconnected');

    return () => ws.close();
  });

  const sendMessage = useCallback((msg: any) => {
    const socket: any = socketRef.current;
    if (socket?.readyState === WebSocket.OPEN) {
      socket?.send(JSON.stringify(msg));
    } else {
      console.warn('Socket not ready to send message');
      toast('Socket not ready to send message');
    }
  }, []);

  return {
    message,
    sendMessage
  };
};
