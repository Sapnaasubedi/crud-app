
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3bmhjvpbebp8p.cloudfront.net',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/full-stack-developer-bootcamp',
        destination: '/software-engineering-bootcamp',
        permanent: true,
      },
      {
        source: '/bootcamp-syllabus/FullStack-Developer-Bootcamp-Syllabus.pdf',
        destination:
          '/bootcamp-syllabus/Software-Engineering-Bootcamp-Syllabus.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
