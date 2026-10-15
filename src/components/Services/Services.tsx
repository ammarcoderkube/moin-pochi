import React from "react";

export default function Services() {
  return (
    <section id="services" className="sevice_section">
      <div className="container">
        <div id="services_column" className="column">
          <div
            data-tl-to="{ 'width': 'auto', 'opacity': 1, 'duration': 0.7, 'ease': 'expo.inOut' }"
            data-tl-type="trigger"
            data-tl-trigger="#services_column"
            data-tl-start="top 90%"
            data-tl-from="{ 'width': '0vw', 'opacity': 0 }"
            className="label"
            style={{ opacity: 1, width: "auto" }}
          >
            SERVICES
          </div>

          <h2
            data-tl-to="{ 'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out' }"
            data-tl-type="trigger"
            data-tl-trigger="#services_column"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{ 'yPercent': 100 }"
            className="h2-style margin-bottom-s"
          >
            Solutions <br />
            That Deliver
          </h2>

          <p
            data-tl-to="{ 'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out' }"
            data-tl-type="trigger"
            data-tl-trigger="#services_column"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{ 'yPercent': 100 }"
            className="max-width-389"
          >
            Same engineering quality, same attention to detail. Built with
            PHP, Laravel, MEAN stack, and LAMP stack tailored to what your product needs right now.
          </p>
        </div>

        <div className="service-wrap">
          {/* Card 1: Ongoing Support */}
          <div className="service-card is-first">
            <div className="service-top-content">
              <div className="service-card-top-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 42 42"
                  fill="none"
                  className="service-card-icon"
                >
                  <rect
                    width="41.5299"
                    height="41.5299"
                    rx="9.96716"
                    fill="#ffffff"
                  />
                  <path
                    d="M20.7656 16.1932C20.7656 18.7145 18.7187 20.7614 16.1974 20.7614C13.6762 20.7614 11.6292 18.7145 11.6292 16.1932V11.625H16.1974C18.7187 11.625 20.7656 13.6719 20.7656 16.1932Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.3302 20.7656C22.809 20.7656 20.762 18.7187 20.762 16.1974C20.762 13.6762 22.809 11.6292 25.3302 11.6292H29.8984V16.1974C29.8984 18.7187 27.8515 20.7656 25.3302 20.7656Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.7656 25.3381C20.7656 22.8168 22.8126 20.7699 25.3338 20.7699C27.8551 20.7699 29.902 22.8168 29.902 25.3381V29.9062H25.3338C22.8126 29.9062 20.7656 27.8593 20.7656 25.3381Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.1932 20.7656C18.7145 20.7656 20.7614 22.8126 20.7614 25.3338C20.7614 27.8551 18.7145 29.902 16.1932 29.902H11.625V25.3338C11.625 22.8126 13.6719 20.7656 16.1932 20.7656Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="service-card-heading">Ongoing Support</h3>
              </div>

              <div className="service-price-item">
                <p>$3,000</p>
                <div className="services-hours-text">
                  <p>/ 30hours</p>
                </div>
              </div>

              <p>
                Your dedicated Full Stack Developer, <br />
                30 hours a month. Laravel &amp; MEAN stack features, API endpoints, CRM modules, and maintenance handled. Minimum 3
                month commitment.
              </p>

              <div className="service-list">
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>New pages, React components, and features</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>REST &amp; GraphQL API development &amp; updates</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>
                    Maintenance, bug fixes, and <br />
                    Next.js version upgrades
                  </p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Technical SEO and Core Web Vitals optimization</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Database queries &amp; cloud deployment management</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>
                    Unused hours roll over <br />
                    (up to 3 months)
                  </p>
                </div>
              </div>
            </div>

            <div className="service-bottom-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 22 23"
                fill="none"
                className="services-tooltip-icon"
              >
                <path
                  d="M11.1846 5.16699C14.5029 5.18253 17.1537 7.85043 17.1777 11.1299C17.2021 14.438 14.5506 17.1168 11.292 17.1768C7.89133 17.2395 5.201 14.5009 5.16699 11.2363C5.13341 7.98119 7.74996 5.17702 11.1846 5.16699Z"
                  stroke="currentColor"
                  strokeWidth="1.58333"
                />
                <rect
                  x="10.3281"
                  y="7.38281"
                  width="1.67711"
                  height="1.67711"
                  rx="0.838555"
                  fill="currentColor"
                />
                <rect
                  x="10.3281"
                  y="9.90234"
                  width="1.67711"
                  height="5.03133"
                  rx="0.838555"
                  fill="currentColor"
                />
              </svg>
              <p>For brands that need continuous growth and long-term collaboration.</p>
            </div>
          </div>

          {/* Card 2: Starter Build */}
          <div className="service-card">
            <div className="service-top-content">
              <div className="service-card-top-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 44 42"
                  fill="none"
                  className="service-card-icon"
                >
                  <rect
                    width="43.191"
                    height="41.5299"
                    rx="9.96716"
                    fill="#ffffff"
                  />
                  <path
                    d="M21.5783 11.6519L12.4512 20.7983V29.9091L21.5783 20.7627V11.6519Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.5918 20.7829V29.8939L30.7191 20.7473V11.6363L21.5918 20.7829Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="service-card-heading">Starter MVP Build</h3>
              </div>

              <div className="service-price-item">
                <p>$5,000</p>
                <div className="services-hours-text" />
              </div>

              <p>
                A clean, production-ready web application or MVP ready to launch in two to three weeks. Built with
                robust PHP / Laravel or MEAN stack architectures.
                <br />
              </p>

              <div className="service-list">
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Full Next.js &amp; React frontend build</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Node.js &amp; Express API backend</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>MongoDB database architecture &amp; auth</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Interactive animations &amp; responsive UI</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Launch within two to three weeks</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Full codebase handoff &amp; documentation</p>
                </div>
              </div>
            </div>

            <div className="service-bottom-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 22 23"
                fill="none"
                className="services-tooltip-icon"
              >
                <path
                  d="M11.1846 5.16699C14.5029 5.18253 17.1537 7.85043 17.1777 11.1299C17.2021 14.438 14.5506 17.1168 11.292 17.1768C7.89133 17.2395 5.201 14.5009 5.16699 11.2363C5.13341 7.98119 7.74996 5.17702 11.1846 5.16699Z"
                  stroke="currentColor"
                  strokeWidth="1.58333"
                />
                <rect
                  x="10.3281"
                  y="7.38281"
                  width="1.67711"
                  height="1.67711"
                  rx="0.838555"
                  fill="currentColor"
                />
                <rect
                  x="10.3281"
                  y="9.90234"
                  width="1.67711"
                  height="5.03133"
                  rx="0.838555"
                  fill="currentColor"
                />
              </svg>
              <p>For new sites or migrations that need a fast, clean start</p>
            </div>
          </div>

          {/* Card 3: Custom Project */}
          <div className="service-card">
            <div className="service-top-content">
              <div className="service-card-top-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 42 42"
                  fill="none"
                  className="service-card-icon"
                >
                  <rect
                    width="41.5299"
                    height="41.5299"
                    rx="9.96716"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.9264 16.8302C29.9264 15.7569 29.113 14.8984 28.0963 14.8984C27.0795 14.8984 26.2661 15.7569 26.2661 16.8302C26.2661 17.5278 26.2661 20.2109 26.2661 20.9085C26.2661 21.9817 25.4527 22.8403 24.436 22.8403C23.4192 22.8403 22.6059 21.9817 22.6059 20.9085C22.6059 20.2109 22.6059 14.2544 22.6059 13.5568C22.6059 12.4836 21.7925 11.625 20.7757 11.625C19.759 11.625 18.9456 12.4836 18.9456 13.5568C18.9456 14.2544 18.9456 20.2109 18.9456 20.9085C18.9456 21.9817 18.1322 22.8403 17.1154 22.8403C16.0987 22.8403 15.2853 21.9817 15.2853 20.9085C15.2853 20.2109 15.2853 17.5278 15.2853 16.8302C15.2853 15.7569 14.4719 14.8984 13.4551 14.8984C12.4384 14.8984 11.625 15.7569 11.625 16.8302V26.5966C11.625 28.4211 12.9976 29.8699 14.7261 29.8699H26.6728C28.4013 29.8699 29.7739 28.4211 29.7739 26.5966L29.9264 16.8302Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="service-card-heading">Custom Web Application</h3>
              </div>

              <div className="service-price-item">
                <p>Book a Call</p>
              </div>

              <p>
                Custom web applications, admin panels, CRM systems, eCommerce platforms, and third-party integrations tailored to scale.
                <br />
              </p>

              <div className="service-list">
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>
                    Custom Next.js &amp; React <br />
                    system architecture
                  </p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>Scalable MongoDB schema design &amp; indexing</p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>
                    Real-time WebSocket &amp; third-party integrations
                  </p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>
                    Integration ready structure for external tools and API driven
                    features
                  </p>
                </div>
                <div className="service-list-item">
                  <div className="service-list-bullet-icon" />
                  <p>14 days post-launch support included</p>
                </div>
              </div>
            </div>

            <div className="service-bottom-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 22 23"
                fill="none"
                className="services-tooltip-icon"
              >
                <path
                  d="M11.1846 5.16699C14.5029 5.18253 17.1537 7.85043 17.1777 11.1299C17.2021 14.438 14.5506 17.1168 11.292 17.1768C7.89133 17.2395 5.201 14.5009 5.16699 11.2363C5.13341 7.98119 7.74996 5.17702 11.1846 5.16699Z"
                  stroke="currentColor"
                  strokeWidth="1.58333"
                />
                <rect
                  x="10.3281"
                  y="7.38281"
                  width="1.67711"
                  height="1.67711"
                  rx="0.838555"
                  fill="currentColor"
                />
                <rect
                  x="10.3281"
                  y="9.90234"
                  width="1.67711"
                  height="5.03133"
                  rx="0.838555"
                  fill="currentColor"
                />
              </svg>
              <p>
                For complex projects that go beyond the basics and need a tailored
                approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
