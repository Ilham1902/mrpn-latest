/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                pathname: "**",
            },
               {
                protocol: "http",
                hostname: "localhost",
                pathname: "**",
               },
        ],
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
