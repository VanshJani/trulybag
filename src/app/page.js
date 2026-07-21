import CommingSoon from '@/components/CommingSoon'
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://trulybag.com"),

  title: "TrulyBag - Coming Soon | Fashion & Clothing Marketplace",

  description:
    "TrulyBag is an upcoming fashion and clothing e-commerce platform from Gujarat, India. We're preparing a modern shopping experience for clothing, footwear, accessories, and more. Launching soon.",

  keywords: [
    "TrulyBag",
    "Fashion Marketplace",
    "Clothing Store",
    "Online Shopping",
    "E-commerce",
    "Fashion",
    "India",
    "Gujarat",
    "Ahmedabad",
    "Gandhinagar",
    "Surat",
    "Coming Soon",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://trulybag.com",
  },

  openGraph: {
    title: "TrulyBag - Coming Soon",
    description:
      "An upcoming fashion and clothing marketplace. Launching soon.",
    url: "https://trulybag.com",
    siteName: "TrulyBag",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrulyBag - Coming Soon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TrulyBag - Coming Soon",
    description:
      "An upcoming fashion and clothing marketplace. Launching soon.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
function page() {
  return (
    <CommingSoon />
  )
}

export default page