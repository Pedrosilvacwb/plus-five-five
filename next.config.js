const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
