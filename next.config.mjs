/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            // TODO : Remove after use
            protocol: 'https',
            hostname: 'placehold.co',
          },
        ],
      },
};

export default nextConfig;
