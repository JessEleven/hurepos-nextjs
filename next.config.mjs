/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // pageExtensions: ['js', 'jsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
}
export default nextConfig
