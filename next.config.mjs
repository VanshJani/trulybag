/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generates a fully static site (HTML + CSS + JS)
  // No Node.js server needed — host on Vercel, Netlify, Cloudflare Pages, etc.
  output: "export",

  // Required for static export — Next.js image optimisation needs a server,
  // so we disable it and let the browser handle images natively.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
