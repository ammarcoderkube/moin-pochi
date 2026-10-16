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
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "lynk",
    num: "01",
    category: "Android / iOS",
    title: "Lynk",
    subtitle: "Taxi Driver & Navigation Platform",
    tags: ["Node JS", "React JS", "WordPress"],
    description:
      "Lynk Taxi Driver is an all-in-one app designed to help taxi drivers unlock earning opportunities and manage their day-to-day tasks efficiently. With a user-friendly interface, secure transactions, and efficient navigation, Lynk Taxi Driver equips drivers to serve their passengers seamlessly while maximizing their income. Whether part-time or full-time, this app allows drivers to work on their schedule with premium support whenever needed.",
    url: "https://coderkube.com/case-studies/lynk/",
    image: "/lynk-paragraph.webp",
  },
  {
    id: "acai-amsterdam",
    num: "02",
    category: "Shopify",
    title: "Acai Amsterdam",
    subtitle: "Superfruits & Supplements E-Commerce",
    tags: ["Shopify", "E-Commerce", "Health Store"],
    description:
      "Acai Amsterdam is a health food store specializing in premium superfruits and supplements, focusing on Açai products. Customers can browse and purchase products directly through the website, with delivery options available throughout the Netherlands. A variety of health supplements and granola to complement a balanced diet.",
    url: "https://coderkube.com/case-studies/acai-amsterdam/",
    image: "/Acai Amsterdam-paragraph.webp",
  },
  {
    id: "peeq",
    num: "03",
    category: "Laravel & PHP",
    title: "PEEQ®",
    subtitle: "Mindset & Breakthrough Coaching Platform",
    tags: ["Android / iOS", "PHP", "UI/UX Design"],
    description:
      "PEEQ® is a Laravel-based digital platform revolutionizing the way professionals enhance their emotional intelligence and achieve breakthroughs in personal and professional domains. By offering a blend of advanced communication tools, tailored learning experiences, and an interactive community, PEEQ® helps users transform their mindset, connect with like-minded individuals, and grow under the guidance of expert coaches. It caters to professionals seeking growth and coaches aiming to showcase their expertise in a dynamic ecosystem.",
    url: "https://coderkube.com/case-studies/peeq/",
    image: "/peeq-paragraph.webp",
  },
  {
    id: "heu",
    num: "04",
    category: "Mobile & Cloud",
    title: "Heu!",
    subtitle: "Smart Discount & Benefit Management App",
    tags: ["Android / iOS", "PHP", "UI/UX Design"],
    description:
      "Heu! is a smart discount and benefit management application designed to simplify how users manage and utilize their credit cards, loyalty cards. By leveraging real-time geolocation, and a unified digital wallet, Heu! ensures users never miss out on available deals. Its mission is to empower users to maximize savings effortlessly while enhancing their dining, and lifestyle experiences.",
    url: "https://coderkube.com/case-studies/heu/",
    image: "/heu-pragraph.webp",
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
                Over 11+ years building scalable web applications, mobile platforms, and high-performance digital solutions across PHP, Laravel, Node.js, React, and modern full-stack architectures.
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
                  {/* Top Media Container: 16:10 Perfect Ratio for Showcase Image */}
                  <div className="work-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="work-card-media-img"
                    />
                    <div className="work-card-media-overlay" />

                    {/* Floating Badges */}
                    <div className="work-card-floating-badges">
                      <span className="work-badge-num">{item.num}</span>
                      <span className="work-badge-category">{item.category}</span>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="work-card-body">
                    <div className="work-card-body-top">
                      <span className="work-card-subtitle">{item.subtitle}</span>
                      <h3 className="work-card-heading">{item.title}</h3>
                      <p className="work-card-desc">{item.description}</p>
                    </div>

                    {/* Card Footer: Tech Stack Pills & Interactive Action Arrow */}
                    <div className="work-card-footer">
                      <div className="work-card-tags">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="work-card-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

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
