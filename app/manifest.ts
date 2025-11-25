import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jaffnacasa.com";

  return {
    name: "Jaffna Casa - Fine Stay in Jaffna",
    short_name: "Jaffna Casa",
    description:
      "A/C & Non A/C Rooms • 3 Bedroom + Hall + Kitchen • Perfect for Groups & Family. Guest house located in Sandilipay, Jaffna, Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#2d5016",
    theme_color: "#f5a623",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}

