import { createRef } from 'react';

export const socketRef = createRef<WebSocket | null>();

export const videoRef: { [key: string]: any | undefined } = {};
