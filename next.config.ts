import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This is required for GitHub Pages if the repo is not at the root domain
  // e.g. https://username.github.io/repo-name
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
};

export default nextConfig;
