import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Full Stack Developer — Moin Pochi | PHP, Laravel, MEAN & LAMP Stack Expert",
  description:
    "Full stack developer with 11+ years of experience building scalable web applications and high-performance digital solutions. Specialized in PHP, Laravel, MEAN stack, and LAMP stack, with strong expertise in custom web applications, REST APIs, admin panels, CRM systems, eCommerce platforms, and third-party integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-mod-js" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.prod.website-files.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
              window.addEventListener('beforeunload', function() {
                window.scrollTo(0, 0);
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Third-party Libraries in exact dependency sequence */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=691d7c9f14d0280ebe2d4108"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollSmoother.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/MotionPathPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/DrawSVGPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="gsap-register"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof gsap !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger,Flip,SplitText,ScrollToPlugin,ScrollSmoother,MotionPathPlugin,DrawSVGPlugin);
              }
            `,
          }}
        />
        <Script
          src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
