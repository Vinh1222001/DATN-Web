// GlobalRefContext.tsx
'use client';
import React, { createContext, useContext, useRef, RefObject } from 'react';

const GlobalRefContext = createContext<{
  videoRef: RefObject<HTMLDivElement>;
} | null>(null);

export const GlobalRefProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <GlobalRefContext.Provider value={{ videoRef: videoRef as any }}>
      {children}
    </GlobalRefContext.Provider>
  );
};

export const useGlobalRef = () => {
  const ctx = useContext(GlobalRefContext);
  if (!ctx)
    throw new Error('useGlobalRef must be used inside GlobalRefProvider');
  return ctx.videoRef;
};
