import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // §10 : ne pas annoncer le framework
};

export default nextConfig;