/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/my',
        destination: '/my/nfts',
        permanent: true,
      },
    ];
  },
};
