/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // 关键：禁用大缓存
  cache: false, // 强制关闭缓存
  distDir: ".next",
}

export default nextConfig;
