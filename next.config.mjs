/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [16, 48, 96, 256, 540],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "transforminglandscapes.ca" }],
        destination: "https://www.transforminglandscapes.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
