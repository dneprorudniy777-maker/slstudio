/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'slstudio.pro',
          },
        ],
        destination: 'https://www.slstudio.pro/$1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
