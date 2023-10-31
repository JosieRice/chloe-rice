/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: `frame-ancestors 'self' https://app.contentful.com`,
                    },
                ],
                source: "/:path*",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                hostname: "images.ctfassets.net",
                pathname: "/**",
                port: "",
                protocol: "https",
            },
            {
                hostname: "images.eu.ctfassets.net",
                pathname: "/**",
                port: "",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
