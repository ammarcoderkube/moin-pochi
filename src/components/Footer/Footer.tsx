"use client";

import React, { useState } from "react";
import { CircularTestimonialsDemo } from "@/components/ui/demo";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const FAQ_COL_1: FAQItem[] = [
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6759-be2d4114",
    question: "Why custom PHP, Laravel & MEAN stack instead of generic builders?",
    answer:
      "With 11+ years of building web applications, custom architectures using PHP/Laravel and the MEAN stack offer unmatched scalability, granular data control, and zero vendor lock-in. Whether it is custom CRM platforms, multi-tenant SaaS, high-throughput REST APIs, or robust eCommerce engines, custom code scales gracefully to millions of users.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe676f-be2d4114",
    question: "Already have an existing web application that needs scaling or refactoring?",
    answer:
      "That is a core specialty. I audit legacy PHP, Laravel, Node.js, and MEAN stack applications, modernize outdated codebases, optimize database queries, implement secure REST APIs, and streamline integrations without causing business downtime.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe677a-be2d4114",
    question: "What is your development and delivery workflow?",
    answer:
      "Every project starts with comprehensive technical scoping: database design, API specification, security architecture, and milestone roadmapping. I build with iterative sprint releases, rigorous code quality, and transparent staging environments so you see progress at every step.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe679b-be2d4114",
    question: "Do you sign NDAs for confidential business solutions?",
    answer:
      "Absolutely. I have worked on proprietary enterprise AI platforms, financial workflows, and sensitive digital products. Discretion, client confidentiality, and intellectual property protection are guaranteed before any technical discussions begin.",
  },
];

const FAQ_COL_2: FAQItem[] = [
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6764-be2d4114",
    question: "Do you build admin panels, CRMs, and third-party integrations?",
    answer:
      "Yes. Over 11+ years I have built custom admin dashboards, role-based CRM systems, payment gateways, ERP connectors, and third-party API integrations (Stripe, HubSpot, AWS, Mapbox, and custom webhooks) engineered for high performance.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6785-be2d4114",
    question: "What does long-term support and maintenance include?",
    answer:
      "I provide ongoing engineering retainers covering feature development, security audits, database tuning, version migrations, server monitoring, and API maintenance to ensure your platform runs 24/7 with zero degradation.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6790-be2d4114",
    question: "How do you handle revisions and client feedback?",
    answer:
      "Collaboration is built directly into my process. Regular sprint reviews, staging links, and direct communication through Slack or email ensure you have full visibility. Adjustments are addressed promptly with an engineering mindset.",
  },
  {
    id: "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe67a6-be2d4114",
    question: "Not sure which tech stack or architecture fits your project?",
    answer: (
      <>
        No stress. Just reach out at{" "}
        <a
          href="mailto:moinpochi@gmail.com?subject=Not%20Sure%20Which%20Plan%20to%20Choose"
          tabIndex={0}
        >
          moinpochi@gmail.com
        </a>{" "}
        and describe your project requirements. I will provide an honest, architectural recommendation tailored to your timeline and budget.
      </>
    ),
  },
];

export default function Footer() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderFaqCard = (item: FAQItem) => {
    const isOpen = Boolean(openIds[item.id]);

    return (
      <div
        key={item.id}
        id={item.id}
        data-hover="false"
        data-delay="0"
        className={`faq w-dropdown ${isOpen ? "w--open" : ""}`}
      >
        <div
          className="faq-toggle w-dropdown-toggle"
          onClick={() => toggleItem(item.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleItem(item.id);
            }
          }}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
        >
          <h3 className="faq-heading">{item.question}</h3>
          <div
            className="faq-icon"
            style={{
              backgroundColor: isOpen ? "var(--accent)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 15 15"
              fill="none"
              className="faq-icon-item"
            >
              <path
                d="M6.5625 0.9375C6.5625 0.419733 6.98223 0 7.5 0C8.01777 0 8.4375 0.419733 8.4375 0.9375V14.0625C8.4375 14.5803 8.01777 15 7.5 15C6.98223 15 6.5625 14.5803 6.5625 14.0625V0.9375Z"
                fill="currentColor"
                className="faq-icon-v-line"
                style={{
                  transform: isOpen ? "scaleY(0)" : "scaleY(1)",
                  transformOrigin: "center",
                  transition: "transform 0.35s ease",
                }}
              />
              <path
                d="M0.9375 8.4375C0.419733 8.4375 2.26323e-08 8.01777 0 7.5C-2.26323e-08 6.98223 0.419733 6.5625 0.9375 6.5625L14.0625 6.5625C14.5803 6.5625 15 6.98223 15 7.5C15 8.01777 14.5803 8.4375 14.0625 8.4375L0.9375 8.4375Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <nav
          className="faq-list w-dropdown-list"
          style={{
            display: "block",
            overflow: "hidden",
          }}
        >
          <div
            className="faq-answer-wrap"
            style={{
              display: "grid",
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              transition: "grid-template-rows 0.4s ease",
              overflow: "hidden",
            }}
          >
            <div className="faq-answer-item" style={{ overflow: "hidden" }}>
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <div className="w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1388 338"
              className="footer-logo-icon"
            >
              <defs>
                <clipPath id="nesh-clip">
                  {/* M */}
                  <path d="M109.46 35.28H218.34L260.35 198.23L302.19 35.28H410.71V303.1H343.11V98.85L290.68 303.1H229.48L177.23 98.85V303.1H109.46Z" />
                  {/* O */}
                  <path d="M453.09 169.37Q453.09 103.78 489.63 67.25Q526.16 30.71 591.38 30.71Q658.24 30.71 694.42 66.61Q730.59 102.51 730.59 167.18Q730.59 214.13 714.79 244.18Q698.98 274.23 669.11 290.95Q639.25 307.66 594.67 307.66Q549.36 307.66 519.68 293.23Q489.99 278.80 471.54 247.56Q453.09 216.32 453.09 169.37ZM535.85 169.73Q535.85 210.29 550.92 228.01Q565.99 245.73 591.93 245.73Q618.60 245.73 633.22 228.38Q647.83 211.02 647.83 166.08Q647.83 128.26 632.58 110.82Q617.32 93.37 591.20 93.37Q566.17 93.37 551.01 111.09Q535.85 128.81 535.85 169.73Z" />
                  {/* I */}
                  <path d="M778.45 35.28H861.39V303.1H778.45Z" />
                  {/* N */}
                  <path d="M921.31 35.28H998.59L1099.43 183.44V35.28H1177.44V303.1H1099.43L999.14 156.03V303.1H921.31Z" />
                  {/* ® symbol */}
                  <path
                    transform="translate(1295, 0) scale(11.25)"
                    d="M0.314882 5.55873C0.104959 5.06153 0 4.54112 0 3.99751C0 3.45391 0.104959 2.93516 0.314882 2.44127C0.524804 1.94738 0.808527 1.5231 1.16605 1.16843C1.52357 0.810441 1.94834 0.527035 2.44035 0.31821C2.93563 0.10607 3.45551 0 4 0C4.54449 0 5.06273 0.10607 5.55474 0.31821C6.05002 0.527035 6.47643 0.810441 6.83395 1.16843C7.19147 1.5231 7.47519 1.94738 7.68511 2.44127C7.89504 2.93516 8 3.45391 8 3.99751C8 4.72012 7.82124 5.38968 7.46371 6.00622C7.10619 6.61943 6.62075 7.10503 6.00738 7.46302C5.39401 7.82101 4.72489 8 4 8C3.45551 8 2.93563 7.89393 2.44035 7.68179C1.94834 7.47297 1.52357 7.19122 1.16605 6.83654C0.808527 6.47856 0.524804 6.05262 0.314882 5.55873ZM0.988931 3.99751C0.988931 4.41185 1.06765 4.80796 1.22509 5.18583C1.38253 5.56039 1.59573 5.88357 1.8647 6.15538C2.13366 6.42718 2.45346 6.64429 2.82411 6.80671C3.19803 6.96582 3.59 7.04537 4 7.04537C4.41 7.04537 4.80033 6.96582 5.17097 6.80671C5.5449 6.64429 5.86634 6.42718 6.1353 6.15538C6.40426 5.88357 6.61746 5.56039 6.77491 5.18583C6.93563 4.80796 7.01599 4.41185 7.01599 3.99751C7.01599 3.58318 6.93563 3.18873 6.77491 2.81417C6.61746 2.4363 6.40426 2.11146 6.1353 1.83965C5.86634 1.56785 5.5449 1.35239 5.17097 1.19329C4.80033 1.03418 4.41 0.95463 4 0.95463C3.45223 0.95463 2.94711 1.09053 2.48462 1.36234C2.02214 1.63083 1.65642 1.99876 1.38745 2.46613C1.12177 2.9335 0.988931 3.44396 0.988931 3.99751ZM2.42066 6.12554V1.85954H4.49692C4.88725 1.85954 5.21033 1.98053 5.46617 2.2225C5.7253 2.46116 5.85486 2.77108 5.85486 3.15227C5.85486 3.45391 5.75974 3.70914 5.56949 3.91796C5.38253 4.12679 5.15129 4.24943 4.87577 4.28589L4.81673 4.29584L5.80566 6.10566H4.62485L3.76876 4.42511H3.51783V6.12554H2.42066ZM3.51783 3.55998H4.3444C4.47232 3.55998 4.574 3.52683 4.64945 3.46053C4.72817 3.39424 4.76753 3.30309 4.76753 3.18707C4.76753 3.06111 4.72981 2.96333 4.65437 2.89372C4.57893 2.82411 4.4756 2.78931 4.3444 2.78931H3.51783V3.55998Z"
                  />
                </clipPath>
              </defs>

              <g clipPath="url(#nesh-clip)">
                <rect width="1388" height="338" fill="#ffffff" />
                <g id="image-trail-group"></g>
              </g>
            </svg>
          </div>
        </div>

        <div className="circular-testimonials-showcase my-12">
          <CircularTestimonialsDemo />
        </div>

        <div id="faq" className="column faq-column-main">
          <div className="label">FAQ</div>
          <h2 className="h2-style">
            Got any <br />
            questions?
          </h2>

          <div className="faq-column">
            <div className="faq-colum-item">
              {FAQ_COL_1.map((item) => renderFaqCard(item))}
            </div>
            <div className="faq-colum-item">
              {FAQ_COL_2.map((item) => renderFaqCard(item))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
