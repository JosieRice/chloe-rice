/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    async headers() {
        return [
          {
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
              },
              {
                key: 'Content-Security-Policy',
                value: `frame-ancestors 'self' https://app.contentful.com`,
              },
            ],
            source: '/:path*',
          },
        ];
      },
};

module.exports = nextConfig;
