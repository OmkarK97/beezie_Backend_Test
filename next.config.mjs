/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        // Exclude .map files from Webpack bundling
        config.module.rules.push({
            test: /\.map$/,
            use: 'ignore-loader',
        });

        // Ensure chrome-aws-lambda is not bundled
        if (isServer) {
            config.externals = [...config.externals, 'chrome-aws-lambda'];
        }

        return config;
    }
};

export default nextConfig;
