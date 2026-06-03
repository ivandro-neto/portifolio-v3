import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // The résumé API reads its Handlebars templates at runtime via `fs`. The
  // filename is chosen dynamically (two-column vs single-column), so automatic
  // file tracing may miss them — include both explicitly in the function bundle.
  outputFileTracingIncludes: {
    "/api/generate-resume": [
      "./pages/api/cv-template.hbs",
      "./pages/api/cv-template-single.hbs",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      // You can add more remote patterns if needed, for example:
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
