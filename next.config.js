/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  // Fix for API routes being treated as static pages
  output: 'standalone',
  // Disable static generation for API routes
  trailingSlash: false,
  // Ensure API routes are not statically generated
  generateStaticParams: false,
};

module.exports = nextConfig;
