/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/docs/:path*",
				destination: "http://localhost:3001/:path*",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
