'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo } from 'react';
import { ILayoutProps } from 'ui';
import Portal from './portal';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { WebSocketProvider } from './providers/soket';
import { GlobalRefProvider } from './providers/ref.video';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 2e3,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    },
    mutations: {
      onError: e => {
        console.log(e?.message);
      }
    }
  }
});

const App = ({ children }: ILayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WebSocketProvider>
        <GlobalRefProvider>
          {children}
          <Portal />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalRefProvider>
      </WebSocketProvider>
    </QueryClientProvider>
  );
};

export default memo(App);
