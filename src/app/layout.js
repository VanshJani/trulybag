import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TrulyBag - Fashion & Clothing Marketplace",
  description: "TrulyBag is an upcoming fashion and clothing e-commerce platform.",
  openGraph: {
    title: "TrulyBag",
    description: "Fashion & Clothing Marketplace",
    url: "https://trulybag.com",
    siteName: "TrulyBag",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrulyBag" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrulyBag",
    description: "Fashion & Clothing Marketplace",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* JSON-LD Schema — must be INSIDE body, not outside the component */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TrulyBag",
              url: "https://trulybag.com",
              logo: "https://trulybag.com/logo/trulybag-logo.svg",
              description: "Upcoming fashion and beauty marketplace in India.",
            }),
          }}
        />

        {/* Google Analytics — replace G-XXXXXXXXXX with your real Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}
