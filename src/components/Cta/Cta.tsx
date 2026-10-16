import React from "react";

export default function Cta() {
  return (
    <section id="webflow_journey" className="cta_section">
      <div className="container">
        <div id="cta_column" className="column cta-column">
          <h2
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#cta_column"
            data-tl-start="top 90%"
            data-tl-from="{ 'yPercent': 100 }"
            data-tl-to="{ 'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out' }"
            data-tl-split="lines"
            className="cta_heading"
          >
            Transform Your <br />
            Digital &amp; Web <br />
            <span className="cta-span-heading">Application</span> <br />
            <span className="cta-span-heading">Journey</span>
          </h2>

          <p
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#cta_column"
            data-tl-start="top 65%"
            data-tl-split="lines"
            data-tl-from="{ 'yPercent': 100 }"
            data-tl-to="{ 'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out' }"
            className="max-width-389"
          >
            Over 11+ years of building scalable web applications, enterprise digital platforms,
            and high-performance SaaS solutions with PHP, Laravel, MEAN stack, and LAMP stack
            engineered to perform, scale, and deliver lasting impact.
          </p>

          <div className="cta-wrap">
            <img
              src="/moin-avatar.png"
              loading="lazy"
              alt="Moin Pochi"
              className="cta_img"
            />
            <div className="column">
              <div className="cta-column-item">
                <div className="cta-chat-grid" style={{ gridTemplateRows: "1fr" }}>
                  <div className="cta-chat-item">
                    <div className="cta-chat">
                      <div className="cta-text-wrap">
                        <p className="cta-text">Have a project or platform in mind?</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="cta-button-grid"
                  style={{ gridTemplateRows: "1fr" }}
                >
                  <div className="cta-button-grid-item">
                    <a
                      data-button-hover=""
                      href="mailto:moinpochi@gmail.com?subject=Let's%20Talk"
                      className="cta-button w-inline-block"
                    >
                      <div className="nav-button-mask">
                        <p className="button-text" aria-label="Let's Talk">
                          <span className="word">Let&apos;s</span>{" "}
                          <span className="word">Talk</span>
                        </p>
                        <p className="button-text clone-p" aria-label="Let's Talk">
                          <span className="word">Let&apos;s</span>{" "}
                          <span className="word">Talk</span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="typing-grid" style={{ gridTemplateRows: "1fr" }}>
                <div className="typing-grid-item">
                  <div className="cta-chat-typing-wrap">
                    <div className="typing-dots" />
                    <div className="typing-dots" />
                    <div className="typing-dots" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
