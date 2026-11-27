/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { useTypeScriptCli: true },
  images: {
    remotePatterns: ['github.com', 'linkedin.com'].map((hostname) => ({
      protocol: 'https' as const,
      hostname,
    })),
  },
};

export default nextConfig;
