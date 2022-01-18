/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // this is only needed until they fix faker-js error
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/servers/1/channels/1',
        permanent: true
      }
    ]
  }
}
