/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "aegis";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repositoryName}` : "",
  assetPrefix: isGithubActions ? `/${repositoryName}/` : ""
};

module.exports = nextConfig;
