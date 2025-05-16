import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ]
  },
}

export default nextConfig;
