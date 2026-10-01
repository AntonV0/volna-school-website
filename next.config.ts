import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/class-one-calendar-2026-2027", destination: "/calendars/class-one-2026-2027", permanent: true }];
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
