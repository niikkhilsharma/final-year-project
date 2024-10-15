/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.freebiesupply.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pngtree.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.imgbin.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gyaanarth.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
