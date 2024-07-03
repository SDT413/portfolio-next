/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? "export" : "server",
    images: {
        loader: process.env.NODE_ENV === 'production' ? "custom" : "default",
        loaderFile: process.env.NODE_ENV === 'production' ? './ImageLoader.ts' : undefined,
    },
};

export default nextConfig;
