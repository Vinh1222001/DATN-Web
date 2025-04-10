import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(`http://${process.env.NEXT_PUBLIC_ESP32_CAM_URL}`)] // <-- your ESP32 IP
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/robot/dashboard',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
