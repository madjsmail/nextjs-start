import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		dirs: ["app", "utils"],
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
