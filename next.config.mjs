/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.pokemondb.net'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pokemon',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;