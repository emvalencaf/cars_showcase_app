/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio'],
        favicon: {
            src: '/assets/car-logo.svg',
            sizes:[16, 32, 48, 64],
            type: 'image/x-icon',
        },
        typescript:{
            ignoreBuildErrors: true,
        }
    },
};

module.exports = nextConfig
