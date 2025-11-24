const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Needed for static export
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

export default nextConfig;
