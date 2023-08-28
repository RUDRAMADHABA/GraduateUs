/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
  }}

module.exports = nextConfig
