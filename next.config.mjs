/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "handles.net" },
      { hostname: "handles.club" },
      { hostname: "defunct.net" },
    ],
  },
};

export default nextConfig;
