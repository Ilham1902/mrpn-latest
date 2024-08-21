/** @type {import('next').NextConfig} */
const nextConfig = {
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
   //    {
   //     protocol: "https",
   //     hostname: "logoipsum.com",
   //     pathname: "**",
   //    },
  ],
 },
 compiler: {
  styledComponents: true,
 },
};

export default nextConfig;
