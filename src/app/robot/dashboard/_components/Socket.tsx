'use client';
import { Button } from '@/components/ui/button';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

const SocketWrapper = () => {
  const [message, setMessage] = useState<string>('');
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8081');
    socketRef.current = ws;
    ws.onopen = () => {
      console.log('WebSocket connected');
      ws.send('Hello from Next.js!');
    };

    ws.onmessage = event => {
      console.log('Message from server:', event.data);
      setMessage(prev => event.data);
    };

    ws.onerror = err => console.error('WebSocket error', err);
    ws.onclose = () => console.log('WebSocket disconnected');

    return () => ws.close();
  }, []);

  const sendMessage = useCallback(() => {
    socketRef.current?.send('Hi ESP32!');
  }, [socketRef]);
  return (
    <div>
      <Button onClick={sendMessage}>Send Message</Button>
      <p>{message}</p>
    </div>
  );
};

export default memo(SocketWrapper);
