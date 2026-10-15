import React from "react";

interface ProjectItem {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  url: string;
  posterBg: string;
  videoBg: string;
  posterOverlay: string;
  videoOverlay: string;
  fallbackImg: string;
}

const PROJECTS: ProjectItem[] = [
  // 1. AI-powered SaaS and business platforms
  {
    id: "boxsocials",
    num: "01",
    category: "AI SaaS",
    title: "BoxSocials",
    subtitle: "AI-Powered Social Media Management Platform",
    tags: ["AI", "SaaS", "React", "Next.js"],
    description:
      "A modern SaaS platform designed to help businesses streamline social media management through AI-powered content generation and rewriting, branded content workflows, scheduling, analytics, competitor tracking, and social media management tools.",
    url: "https://www.boxsocials.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b40e774226223d6d23_Frame%20116046242.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc888097b7646f83cf8_Client%20-%201910%20(Background).avif",
    videoBg: "https://f1-assets.b-cdn.net/Client%20-%201910%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc8bd343b5a6bd033a6_1910%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/1910-optimised.webm",
  },
  {
    id: "thefrondapp",
    num: "02",
    category: "Full-Stack SaaS",
    title: "The Frond App",
    subtitle: "AI-Powered Planning & Collaboration Platform",
    tags: ["AI", "Full-Stack SaaS", "Web & Mobile"],
    description:
      "An intelligent planning platform that helps users organize projects, build personalized plans, manage tasks and budgets, and collaborate through AI-assisted workflows across web and mobile experiences.",
    url: "https://www.thefrondapp.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a080d17ca1d8d0c085a58_Frame%20116046298.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a4270735394074d405d8cdb_SemiconBio%20-%20Update%2003.avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20SemiconBio%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc80e9268be5e6f17f2_SemiconBio%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/SemiconBio-optimised.webm",
  },
  {
    id: "quoteitpro",
    num: "03",
    category: "B2B SaaS",
    title: "QuoteItPro",
    subtitle: "B2B Quoting and Job Management SaaS",
    tags: ["B2B SaaS", "PHP", "Vue.js", "Workflows"],
    description:
      "A business management platform designed to streamline quoting and job-management processes, with dashboard-based workflows that help businesses organize quotes and manage operational activities.",
    url: "http://quoteitpro.co.uk",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b45d5bf5df6ed763ff_Frame%20116046247.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc91b5db38eeb9f9a79_Client%20-%20Happy%20Ring%20(Background).avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20Happy%20Ring%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc9e60eb2e1ad2902d8_Happy%20Ring%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/HappyRing-optimised.webm",
  },
  {
    id: "nerdpay",
    num: "04",
    category: "Fintech",
    title: "NerdPay",
    subtitle: "B2B Accounts Receivable Automation",
    tags: ["Fintech", "SaaS", "Financial Workflows", "Laravel"],
    description:
      "A financial technology platform focused on streamlining accounts-receivable operations and business payment workflows, helping organizations improve the management of financial processes.",
    url: "https://nerdpays.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b45d5bf5df6ed763ff_Frame%20116046247.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc8b12f78cbd2eb83c3_Client%20-%20PSSLTD%20(Background).avif",
    videoBg: "https://f1-assets.b-cdn.net/Client%20-%20PSSLTD%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc8915804b4fe39ce44_PSSLTD%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/PSSLTD-optimised.webm",
  },
  // 2. Enterprise AI and recommendation systems
  {
    id: "vianai",
    num: "05",
    category: "Enterprise AI",
    title: "Vianai",
    subtitle: "Enterprise AI Analytics Platform",
    tags: ["Enterprise AI", "Analytics", "GenAI", "Big Data"],
    description:
      "An enterprise AI platform focused on helping organizations interact with and derive insights from business data using AI-driven analytics and conversational experiences.",
    url: "https://www.vian.ai/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b45d5bf5df6ed763ff_Frame%20116046247.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a427154fa2677d27a964842_Client%20-%20Lilipad%20(Background).avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20Lilipad%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc888097b7646f83ca2_Lilipad%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/Lilipad-optimised.webm",
  },
  {
    id: "govava",
    num: "06",
    category: "Recommendation AI",
    title: "Govava",
    subtitle: "AI-Powered Personalized Gift Discovery",
    tags: ["AI", "Recommendations", "E-Commerce", "PHP"],
    description:
      "An AI-powered gift discovery platform that uses user preferences and guided discovery to recommend relevant gift ideas, helping users navigate products and find personalized options.",
    url: "https://www.govava.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b4c7536983db8aa94b_Frame%20116046243.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc8e57f823bcb23eb4a_Client%20-%20Omicron%20(Background).avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20Omicron%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc861358fc9caebadd7_Omicron%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/Omicron-optimised.webm",
  },
  // 3. Additional strong portfolio projects
  {
    id: "reg247",
    num: "07",
    category: "Automotive & Cloud",
    title: "REG247",
    subtitle: "Automotive Digital Platform",
    tags: ["React", "AWS", "APIs", "Integrations"],
    description:
      "A web platform for automotive-related services, combining a modern React interface with routing, cloud infrastructure, and third-party integrations to support core user journeys.",
    url: "https://www.reg247.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b4ea501cfa7bfc61bc_Frame%20116046248.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc807f9848ecf6a2844_Client%20-%20Puck%20(Background).avif",
    videoBg: "https://f1-assets.b-cdn.net/Client%20-%20Puck%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc825fe47bc504e5594_Puck%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/Puck-optimised.webm",
  },
  {
    id: "holoniq",
    num: "08",
    category: "ClimateTech Research",
    title: "HolonIQ",
    subtitle: "ClimateTech Research & Intelligence Platform",
    tags: ["Webflow", "HubSpot", "Analytics", "Data Platform"],
    description:
      "A research-focused digital platform presenting climate technology company information and industry insights through structured content and data-oriented user experiences.",
    url: "https://www.holoniq.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b48a5e0c4375823c97_Frame%20116046251.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc82aeeb32d25045e95_Client%20-%20Alosant%20(Background).avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20Alosant%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc84686deff189c83d9_Alosant%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/Alosant-optimised.webm",
  },
  {
    id: "oerland",
    num: "09",
    category: "Interactive Geospatial",
    title: "Oerland",
    subtitle: "Interactive Adventure Route & Community",
    tags: ["Webflow", "Mapbox", "Leaflet", "Community"],
    description:
      "An interactive platform centered on adventure motorcycle routes and community experiences, using mapping technology to support route discovery and location-based exploration.",
    url: "https://www.oerland.com/",
    fallbackImg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693a07b45d5bf5df6ed763ff_Frame%20116046247.avif",
    posterBg:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc80baec9ca413f130b_Client%20-%20GetRay%20AI%20(Background).avif",
    videoBg:
      "https://f1-assets.b-cdn.net/Client%20-%20GetRay%20AI%20(Background).mp4",
    posterOverlay:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6a426dc8267cb865512eda51_GetRay%20AI%20-%20Transparent.avif",
    videoOverlay:
      "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/GetRayAI-optimised.webm",
  },
];

export default function Work() {
  return (
    <section id="work" data-theme="dark" className="work_section">
      <div className="work-sticky-support"></div>
      <div id="projects" className="work-sticky">
        <div className="work-container">
          <div className="work-top-layout">
            <div
              id="w-node-_5e7c5502-ddba-215f-98c3-2549ffbe64ae-be2d4114"
              className="column"
            >
              <div
                data-tl-once=""
                data-tl-type="trigger"
                data-tl-trigger=".work_section"
                data-tl-start="top 80%"
                data-tl-from="{'width':'0vw','opacity':0}"
                data-tl-to="{ 'width':'auto', 'opacity':1, 'duration':0.7, 'ease':'expo.inOut' }"
                className="label is-secondary"
              >
                SELECTED WORK
              </div>
              <h2
                data-tl-once=""
                data-tl-type="trigger"
                data-tl-trigger=".work_section"
                data-tl-start="top 80%"
                data-tl-split="lines"
                data-tl-from="{'yPercent': 100}"
                data-tl-to="{'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
                className="h2-style-white"
              >
                Built with PHP, Laravel &amp; Modern Stacks,
                <br />
                Engineered for Scale
              </h2>
            </div>
            <div
              id="w-node-_5e7c5502-ddba-215f-98c3-2549ffbe64b5-be2d4114"
              className="work-top-text"
            >
              <p
                data-tl-once=""
                data-tl-type="trigger"
                data-tl-trigger=".work_section"
                data-tl-start="top 80%"
                data-tl-split="lines"
                data-tl-from="{'yPercent': 100}"
                data-tl-to="{'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
              >
                Over 11+ years building scalable web applications and high-performance digital solutions across AI platforms, enterprise systems, fintech workflows, and B2B SaaS.
              </p>
            </div>
          </div>
          <div className="work-track-wrap">
            <div className="work-track">
              {PROJECTS.map((item) => (
                <a
                  key={item.id}
                  aria-label={`View ${item.title} project`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card w-inline-block"
                >
                  <img
                    src={item.fallbackImg}
                    loading="lazy"
                    alt={item.title}
                    className="work-image"
                  />
                  <div className="w-embed">
                    <video
                      className="work-bg"
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.posterBg}
                      data-src={item.videoBg}
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      autoPlay
                    ></video>
                  </div>
                  <div className="work-card-content">
                    <div className="work-card-content-top-layout">
                      <div className="work-label">{item.num}</div>
                      <div className="work-label-wrap">
                        <div
                          className="work-label"
                          style={{
                            color: "var(--accent)",
                            borderColor: "rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          {item.category}
                        </div>
                        {item.tags.map((tag, tIdx) => (
                          <div key={tIdx} className="work-label">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-embed">
                      <video
                        className="work-video"
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={item.posterOverlay}
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={item.videoOverlay}
                      ></video>
                    </div>
                    <div className="work-card-content-bottom-layout">
                      <div style={{ marginBottom: "0.4rem" }}>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--accent)",
                            fontWeight: 600,
                            display: "block",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {item.subtitle}
                        </span>
                        <h3 className="work-card-heading">{item.title}</h3>
                      </div>
                      <p className="op80" style={{ fontSize: "0.88rem", lineHeight: "1.4" }}>
                        {item.description}
                      </p>
                      <div className="work-card-arrow-wrap">
                        <div className="work-card-arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 23 23"
                            fill="none"
                            className="work-card-arrow"
                          >
                            <rect
                              x="15.4004"
                              y="5.5"
                              width="2"
                              height="15"
                              rx="1"
                              transform="rotate(45 15.4004 5.5)"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="14.8145"
                              y="5.5"
                              width="2"
                              height="11"
                              rx="1"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="16.8145"
                              y="5.5"
                              width="2"
                              height="11"
                              rx="1"
                              transform="rotate(90 16.8145 5.5)"
                              fill="currentColor"
                            ></rect>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 23 23"
                            fill="none"
                            className="work-card-arrow-2"
                          >
                            <rect
                              x="15.4004"
                              y="5.5"
                              width="2"
                              height="15"
                              rx="1"
                              transform="rotate(45 15.4004 5.5)"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="14.8145"
                              y="5.5"
                              width="2"
                              height="11"
                              rx="1"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="16.8145"
                              y="5.5"
                              width="2"
                              height="11"
                              rx="1"
                              transform="rotate(90 16.8145 5.5)"
                              fill="currentColor"
                            ></rect>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
