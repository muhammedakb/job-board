/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akb-job-board.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
