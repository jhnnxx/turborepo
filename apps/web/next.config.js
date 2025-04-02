/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/docs/:path*",
				destination: "https://turborepo-docs-ten.vercel.app/:path*",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
