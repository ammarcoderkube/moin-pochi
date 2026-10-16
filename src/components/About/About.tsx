import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="column">
          <div
            data-tl-to="{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
            data-tl-type="trigger"
            data-tl-trigger=".about-section"
            data-tl-start="top 90%"
            data-tl-from="{'width':'0vw','opacity':0}"
            className="label"
          >
            Start small grow big
          </div>
          <h2
            data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            data-tl-type="trigger"
            data-tl-trigger=".about-section"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{'yPercent': 100}"
            className="h2-style margin-bottom-s"
          >
            About Me (&amp;) <br />
            My Journey
          </h2>
          <p
            data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            data-tl-type="trigger"
            data-tl-trigger=".about-section"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{'yPercent': 100}"
            className="max-width-389"
          >
            11+ years ago I built my first production web platform. What followed
            is a journey across PHP, Laravel, MEAN stack, LAMP stack, and enterprise AI platforms.
          </p>
        </div>
        <div className="about-wrap">
          <div
            id="ac-1"
            data-connect="step-1"
            data-origin="bottom right"
            data-desktop=""
            className="about-card-wrap ac-1"
          >
            <div
              data-tl-desktop=""
              data-tl-type="trigger"
              data-tl-trigger=".about-card-container"
              data-tl-start="-45% top"
              data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
              data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
              className="about-card"
            >
              <p className="about-card-year">
                '
                <span
                  data-tl-desktop=""
                  data-number-count="19"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-45% top"
                  data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                >
                  19
                </span>
              </p>
              <h3
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="-45% top"
                data-tl-split="lines"
                data-tl-from="{'yPercent': 100}"
                data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card-heading"
              >
                Starting out with my brother
              </h3>
              <p
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="-45% top"
                data-tl-split="lines"
                data-tl-from="{'yPercent': 100}"
                data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                className="op80"
              >
                Dived deep into modern JavaScript, Node.js, and React. Spent
                countless nights building projects and mastering full-stack architecture.
              </p>
              <div className="about-card-bottom-layout">
                <div className="about-card-bottom-layout-left">
                  <div className="about-card-img-wrap">
                    <img
                      className="about-card-img z-index-s"
                      src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6938003f0416538c089a67eb_Frame%20116046198.avif"
                      data-tl-trigger=".about-card-container"
                      alt="My brother Stefan"
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                      data-tl-start="-45% top"
                      loading="lazy"
                      data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                    />
                    <img
                      className="about-card-img is-riight-side"
                      src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6938003e6bd18390b3bef67c_Frame%20116046197.avif"
                      data-tl-trigger=".about-card-container"
                      alt=""
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                      data-tl-start="-45% top"
                      loading="lazy"
                      data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                    />
                  </div>
                  <p
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-45% top"
                    data-tl-split="lines"
                    data-tl-from="{'yPercent': 100}"
                    data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                    className="about-card-bottom-text"
                  >
                    @stefan
                    <br />
                    7years ago
                  </p>
                </div>
                <button
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-45% top"
                  data-tl-from="{'opacity': 0}"
                  data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                  data-tl-desktop=""
                  aria-label="Read more about starting out with my brother"
                  className="about-card-button"
                >
                  <p className="paragraph">Read more</p>
                </button>
                <div className="popup-card-wrap">
                  <div className="popup-card-item">
                    <div className="popup-card">
                      <div className="popup-card-top-item">
                        <div>2019</div>
                        <div className="popup-close">
                          <div className="popup-close-icon">
                            <div className="popup-close-path-1"></div>
                            <div className="popup-close-path-2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="popup-card-bottom-item">
                        <div className="about-card-img-wrap">
                          <img
                            src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df05a90861c514ccbed5_Frame%20116046201-1.svg"
                            loading="lazy"
                            alt=""
                            className="about-card-img"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df25b4ed7feceb529a70_Frame%20116046202.avif"
                            loading="lazy"
                            alt="My Brother Stefan"
                            className="about-card-img is-riight-side"
                          />
                          <h4 className="popup-heading">
                            Starting out with my brother
                          </h4>
                          <p>
                            When I built my first dynamic application with React and Node.js,
                            everything clicked. Connecting components to an API and database in real-time
                            was mesmerizing. No master plan at first—just endless curiosity and code.
                            Months of late nights building, refactoring, and exploring modern frameworks,
                            and I knew full-stack engineering was my true craft.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card-point-wrap">
              <div className="about-card-point-line-wrap">
                <div
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-45% top"
                  data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                  data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                  className="about-card-point-line"
                ></div>
              </div>
              <div className="about-card-point-circle"></div>
            </div>
          </div>
          <div className="about-card-container">
            <div
              data-desktop=""
              data-connect="step-2"
              data-origin="bottom left"
              className="about-card-wrap ac-2"
            >
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-22% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="-22% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="20"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-22% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    20
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-22% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  First freelance steps
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-22% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  First real client. First real panic. Working for yourself and
                  working for someone else are completely different.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6938003e6bd18390b3bef67c_Frame%20116046197.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="-22% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                      <img
                        className="about-card-img is-riight-side"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f930d96c6e20e538418_Frame%20116046202-2.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        data-tl-start="-22% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="-22% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @react
                      <br />
                      3years ago
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-22% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about first freelance steps"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2020</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df05a90861c514ccbed5_Frame%20116046201-1.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df05926be20e2a5210dc_Frame%20116046197-1.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img is-riight-side"
                            />
                            <h4 className="popup-heading">
                              First freelance steps
                            </h4>
                            <p>
                              Practicing on my own was comfortable. Then someone
                              trusted me with their project and suddenly every
                              pixel mattered in a way it didn't before. That
                              first year of client work taught me more than six
                              months of practice ever did. Not because the
                              projects were complex but because someone was
                              counting on me to get it right.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop=""
              data-connect="step-3"
              data-origin="bottom left"
              className="about-card-wrap ac-3"
            >
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-4% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="-4% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="21"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-4% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    21
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-4% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  Beyond what I knew
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-4% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  An enterprise application that demanded custom architecture
                  and high performance. Pushed full-stack engineering to the limit.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f936be7964da2364ec5_Frame%20116046200.avif"
                        data-tl-trigger=".about-card-container"
                        alt="FiftySeven Agency"
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="-4% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="-4% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @fiftyseven
                      <br />
                      5years ago
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="-4% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about beyond what I knew"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2021</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df057bcc609a31ad9653_Frame%20116046257.avif"
                              loading="lazy"
                              alt="FiftySeven Agency"
                              className="about-card-img"
                            />
                            <h4 className="popup-heading">
                              Beyond what <br />I knew
                            </h4>
                            <p>
                              When{" "}
                              <a
                                href="https://www.fiftyseven.co/"
                                target="_blank"
                              >
                                FIFTYSEVEN
                              </a>{" "}
                              sent me the brief for Roswell Biotech, my first
                              thought was how to architect this for scale. The design demanded pixel-perfect
                              execution, real-time data handling was complex, and I built custom React
                              components and Node.js microservices to make it work seamlessly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop=""
              data-connect="step-4"
              data-origin="bottom right"
              className="about-card-wrap ac-4"
            >
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="11% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="22"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="11% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    22
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="11% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  Leveling up
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="11% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  The year animations and CMS stopped being extras and started
                  shaping how every project feels.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f93c84f50980dd014b3_Frame%20116046203.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="11% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                      <img
                        className="about-card-img is-riight-side"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f9327bbf72053c6447f_Frame%20116046204.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        data-tl-start="11% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="11% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @gsap
                      <br />
                      4years ago
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="11% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about leveling up"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2022</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df0596a543d59e90401b_Frame%20116046197-2.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df0508fec342703e430f_Frame%20116046201.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img is-riight-side"
                            />
                            <h4 className="popup-heading">Leveling up</h4>
                            <p>
                              GSAP went from something I used occasionally to
                              something that shaped every project. Animations
                              weren't decoration anymore, they were part of how
                              a site communicates. On the CMS side I kept
                              finding cleaner and smarter ways to structure
                              content, setups that made managing a site
                              effortless for clients. Everything I worked on
                              this year started feeling more intentional.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="11% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
            </div>
            <div
              data-desktop=""
              data-connect="step-5"
              data-origin="bottom left"
              className="about-card-wrap ac-5"
            >
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="20% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="20% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="23"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="20% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    23
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="20% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  From trust to referrals
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="20% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  No pitch. No portfolio review. Just clients telling people
                  'work with Moin.' That hit different.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f9348881bb03b006451_Frame%20116046201-1.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="20% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                      <img
                        className="about-card-img is-riight-side"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f933cc29e0ef38aa1b4_Frame%20116046202-1.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        data-tl-start="20% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="20% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @clients
                      <br />
                      3years ago
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="20% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about from trust to referrals"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2023</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df05fc58dfb3e9f5fbec_Frame%20116046197.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df06fafef34d89b8c2f0_Frame%20116046198.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img is-riight-side"
                            />
                            <h4 className="popup-heading">
                              From trust to referrals
                            </h4>
                            <p>
                              Clients I'd worked with came back with new
                              projects. Some recommended me to people I'd never
                              met. No interview, no portfolio walkthrough, just
                              'work with Moin, he delivers.' That kind of trust
                              isn't something you can put in a case study. But
                              it's the thing I'm most proud of.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop=""
              data-connect="step-6"
              data-origin="bottom left"
              className="about-card-wrap ac-6"
            >
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="36% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="36% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="24"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="36% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    24
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="36% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  A life-changing year
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="36% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  I got married. My daughter Djina was born. Suddenly everything
                  I do has a deeper reason behind it.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f936be7964da2364eca_Frame%20116046201.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="36% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                      <img
                        className="about-card-img is-riight-side"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f939dc793550f75d931_Frame%20116046202.avif"
                        data-tl-trigger=".about-card-container"
                        alt="Daughter Djina"
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        data-tl-start="36% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="36% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @family
                      <br />
                      2years ago
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="36% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about a life-changing year"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2024</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6945df057a20901ce46dcb36_Frame%20116046197-3.svg"
                              loading="lazy"
                              alt=""
                              className="about-card-img"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694678ece28003b18bbca37b_Frame%20116046198.avif"
                              loading="lazy"
                              alt="Smiling baby girl with blue eyes wearing a pink bow headband and a white outfit."
                              className="about-card-img is-riight-side"
                            />
                            <h4 className="popup-heading">
                              A life - <br />
                              changing year
                            </h4>
                            <p>
                              Before this year I thought I understood what
                              motivation meant. I had no idea. Nothing makes you
                              sharper at work than knowing exactly who you're
                              coming home to. Djina changed how I see
                              everything, not just life, but how I show up for
                              every single thing I do.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop=""
              data-connect="step-7"
              data-origin="bottom left"
              className="about-card-wrap ac-7"
            >
              <div className="about-card-point-wrap">
                <div className="about-card-point-line-wrap">
                  <div
                    data-tl-desktop=""
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="58% top"
                    data-tl-from="{'clipPath':'inset(100% 0% % 0%)'}"
                    data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    className="about-card-point-line"
                  ></div>
                </div>
                <div className="about-card-point-circle"></div>
              </div>
              <div
                data-tl-desktop=""
                data-tl-type="trigger"
                data-tl-trigger=".about-card-container"
                data-tl-start="58% top"
                data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                className="about-card"
              >
                <p className="about-card-year">
                  '
                  <span
                    data-tl-desktop=""
                    data-number-count="26"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="58% top"
                    data-tl-to="{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  >
                    26
                  </span>
                </p>
                <h3
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="58% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  className="about-card-heading"
                >
                  The journey continues
                </h3>
                <p
                  data-tl-desktop=""
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="58% top"
                  data-tl-split="lines"
                  data-tl-from="{'yPercent': 100}"
                  data-tl-to="{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  className="op80"
                >
                  3.5 years in. Still obsessed. Building scalable full-stack
                  platforms and figuring out how AI fits into what I do.
                </p>
                <div className="about-card-bottom-layout">
                  <div className="about-card-bottom-layout-left">
                    <div className="about-card-img-wrap">
                      <img
                        className="about-card-img"
                        src="https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69399f93fddfcaeaadcfa3d1_Frame%20116046200-1.avif"
                        data-tl-trigger=".about-card-container"
                        alt=""
                        data-tl-desktop=""
                        data-tl-type="trigger"
                        data-tl-to="{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        data-tl-start="58% top"
                        loading="lazy"
                        data-tl-from="{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                      />
                      <div className="last-year-active-dot"></div>
                    </div>
                    <p
                      data-tl-desktop=""
                      data-tl-type="trigger"
                      data-tl-trigger=".about-card-container"
                      data-tl-start="58% top"
                      data-tl-split="lines"
                      data-tl-from="{'yPercent': 100}"
                      data-tl-to="{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      className="about-card-bottom-text"
                    >
                      @moin
                      <br />
                      active now
                    </p>
                  </div>
                  <button
                    data-tl-type="trigger"
                    data-tl-trigger=".about-card-container"
                    data-tl-start="58% top"
                    data-tl-from="{'opacity': 0}"
                    data-tl-to="{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    data-tl-desktop=""
                    aria-label="Read more about the journey continues"
                    className="about-card-button"
                  >
                    <p className="paragraph">Read more</p>
                  </button>
                  <div className="popup-card-wrap">
                    <div className="popup-card-item">
                      <div className="popup-card">
                        <div className="popup-card-top-item">
                          <div>2026</div>
                          <div className="popup-close">
                            <div className="popup-close-icon">
                              <div className="popup-close-path-1"></div>
                              <div className="popup-close-path-2"></div>
                            </div>
                          </div>
                        </div>
                        <div className="popup-card-bottom-item">
                          <div className="about-card-img-wrap">
                            <img
                              src="/moin-avatar.png"
                              loading="lazy"
                              alt="Me | Moin Pochi"
                              className="about-popup-img"
                            />
                            <h4 className="popup-heading">
                              The journey continues
                            </h4>
                            <p>
                              Technology never stands still and neither do I.
                              After 11+ years of building, architecting, and
                              evolving scalable web applications, enterprise AI and SaaS systems
                              open new horizons for digital impact. The best work is still ahead.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-timeline-wrap">
              <div
                data-tl-desktop=""
                data-tl-type="scroll"
                data-tl-trigger=".about-card-container"
                data-tl-start="top 90%"
                data-tl-end="bottom 80%"
                data-tl-from="{'height' : '0%'}"
                data-tl-to="{   'keyframes': [     { 'height': '14%', 'duration': 2 },     { 'height': '28%', 'duration': 1 },     { 'height': '42%', 'duration': 1.5 },     { 'height': '56%', 'duration': 2 },     { 'height': '70%', 'duration': 1 },     { 'height': '84%', 'duration': 1.5 },     { 'height': '100%', 'duration': 2 }   ],   'ease': 'none' }"
                className="about-timeline-overflow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 1118 2166"
                  fill="none"
                  className="about-timeline"
                >
                  <path
                    d="M568.583 2156.04C577.972 2158.27 587.663 2160.56 597.845 2162.95L597.349 2165.06C587.182 2162.67 577.504 2160.39 568.127 2158.17L568.583 2156.04Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M568.583 2156.04C577.972 2158.27 587.663 2160.56 597.845 2162.95L597.349 2165.06C587.182 2162.67 577.504 2160.39 568.127 2158.17L568.583 2156.04Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M516.754 2143.51C525.171 2145.59 533.538 2147.63 542.014 2149.68L541.558 2151.81C533.082 2149.76 524.714 2147.72 516.297 2145.64L516.754 2143.51Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M516.754 2143.51C525.171 2145.59 533.538 2147.63 542.014 2149.68L541.558 2151.81C533.082 2149.76 524.714 2147.72 516.297 2145.64L516.754 2143.51Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1113.37 7.05273C857.638 75.0405 691.252 130.525 419.75 240.01C265.135 302.359 160.718 349.057 94.9395 399.803C62.0738 425.157 38.8986 451.491 23.9316 481.25C8.96604 511.006 2.17188 544.259 2.17188 583.504C2.17194 613.853 8.02461 640.901 24.0537 666.256C40.0935 691.627 66.381 715.394 107.409 739.066C189.501 786.431 330.303 833.25 565.114 891.842C812.778 953.64 932.075 1019.04 989.682 1079.82C1047.39 1140.71 1043.09 1196.89 1044.1 1239.48V1239.52C1043.79 1259.24 1039.25 1277.68 1027.51 1295.61C1015.79 1313.52 996.931 1330.86 968.091 1348.46C910.437 1383.65 812.64 1420.07 651.411 1464.25L650.62 1464.46C508.96 1503.28 357.819 1544.7 242.087 1602.3C126.305 1659.92 46.4043 1733.52 46.4043 1836.5C46.4043 1888.17 60.2488 1929.16 84.1621 1962.42C108.086 1995.69 142.136 2021.3 182.644 2042.12C263.71 2083.78 370.327 2106.11 472.759 2132.43C478.709 2133.96 484.522 2135.44 490.242 2136.89L489.785 2139.01C484.038 2137.56 478.197 2136.07 472.218 2134.53C369.967 2108.26 262.999 2085.86 181.651 2044.05C140.952 2023.13 106.587 1997.33 82.3984 1963.68C58.199 1930.02 44.2324 1888.59 44.2324 1836.5C44.2324 1732.18 125.209 1658.04 241.119 1600.35C357.079 1542.64 508.446 1501.17 650.046 1462.37L658.348 1460.08C815.096 1416.84 910.487 1381.08 966.959 1346.61C995.63 1329.11 1014.21 1311.97 1025.7 1294.42C1037.17 1276.89 1041.62 1258.87 1041.92 1239.51C1040.92 1196.85 1045.16 1141.52 988.105 1081.32C930.944 1021 812.164 955.726 564.589 893.949C329.796 835.362 188.714 788.484 106.324 740.947C65.112 717.169 38.5092 693.184 22.2188 667.416C5.91787 641.632 6.28439e-05 614.154 0 583.504C0 543.999 6.8414 510.397 21.9912 480.274C37.1399 450.154 60.5607 423.582 93.6133 398.083C159.672 347.122 264.384 300.321 418.938 237.996C690.517 128.481 856.987 72.9653 1112.81 4.95312L1113.37 7.05273Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1113.37 7.05273C857.638 75.0405 691.252 130.525 419.75 240.01C265.135 302.359 160.718 349.057 94.9395 399.803C62.0738 425.157 38.8986 451.491 23.9316 481.25C8.96604 511.006 2.17188 544.259 2.17188 583.504C2.17194 613.853 8.02461 640.901 24.0537 666.256C40.0935 691.627 66.381 715.394 107.409 739.066C189.501 786.431 330.303 833.25 565.114 891.842C812.778 953.64 932.075 1019.04 989.682 1079.82C1047.39 1140.71 1043.09 1196.89 1044.1 1239.48V1239.52C1043.79 1259.24 1039.25 1277.68 1027.51 1295.61C1015.79 1313.52 996.931 1330.86 968.091 1348.46C910.437 1383.65 812.64 1420.07 651.411 1464.25L650.62 1464.46C508.96 1503.28 357.819 1544.7 242.087 1602.3C126.305 1659.92 46.4043 1733.52 46.4043 1836.5C46.4043 1888.17 60.2488 1929.16 84.1621 1962.42C108.086 1995.69 142.136 2021.3 182.644 2042.12C263.71 2083.78 370.327 2106.11 472.759 2132.43C478.709 2133.96 484.522 2135.44 490.242 2136.89L489.785 2139.01C484.038 2137.56 478.197 2136.07 472.218 2134.53C369.967 2108.26 262.999 2085.86 181.651 2044.05C140.952 2023.13 106.587 1997.33 82.3984 1963.68C58.199 1930.02 44.2324 1888.59 44.2324 1836.5C44.2324 1732.18 125.209 1658.04 241.119 1600.35C357.079 1542.64 508.446 1501.17 650.046 1462.37L658.348 1460.08C815.096 1416.84 910.487 1381.08 966.959 1346.61C995.63 1329.11 1014.21 1311.97 1025.7 1294.42C1037.17 1276.89 1041.62 1258.87 1041.92 1239.51C1040.92 1196.85 1045.16 1141.52 988.105 1081.32C930.944 1021 812.164 955.726 564.589 893.949C329.796 835.362 188.714 788.484 106.324 740.947C65.112 717.169 38.5092 693.184 22.2188 667.416C5.91787 641.632 6.28439e-05 614.154 0 583.504C0 543.999 6.8414 510.397 21.9912 480.274C37.1399 450.154 60.5607 423.582 93.6133 398.083C159.672 347.122 264.384 300.321 418.938 237.996C690.517 128.481 856.987 72.9653 1112.81 4.95312L1113.37 7.05273Z"
                    fill="currentColor"
                  ></path>
                  <circle
                    cx="1111.09"
                    cy="6.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="186.086"
                    cy="341.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="105.086"
                    cy="739.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="998.086"
                    cy="1092.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="582.086"
                    cy="1482.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="59.0859"
                    cy="1766.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <circle
                    cx="458.086"
                    cy="2129.5"
                    r="5.5"
                    fill="#ffffff"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="op-0"
                  ></circle>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4101_214"
                      x1="568.737"
                      y1="380.366"
                      x2="568.737"
                      y2="1766.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.201923" stopColor="#ffffff"></stop>
                      <stop
                        offset="0.240385"
                        stopColor="#ffffff"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_4101_214"
                      x1="568.737"
                      y1="380.366"
                      x2="568.737"
                      y2="1766.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.201923" stopColor="#ffffff"></stop>
                      <stop
                        offset="0.240385"
                        stopColor="#ffffff"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_4101_214"
                      x1="568.737"
                      y1="380.366"
                      x2="568.737"
                      y2="1766.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.201923" stopColor="#ffffff"></stop>
                      <stop
                        offset="0.240385"
                        stopColor="#ffffff"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 1118 2166"
                fill="none"
                className="about-timeline-position"
              >
                <path
                  d="M568.583 2156.04C577.972 2158.27 587.663 2160.56 597.845 2162.95L597.349 2165.06C587.182 2162.67 577.504 2160.39 568.127 2158.17L568.583 2156.04Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <path
                  d="M568.583 2156.04C577.972 2158.27 587.663 2160.56 597.845 2162.95L597.349 2165.06C587.182 2162.67 577.504 2160.39 568.127 2158.17L568.583 2156.04Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <path
                  d="M516.754 2143.51C525.171 2145.59 533.538 2147.63 542.014 2149.68L541.558 2151.81C533.082 2149.76 524.714 2147.72 516.297 2145.64L516.754 2143.51Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <path
                  d="M516.754 2143.51C525.171 2145.59 533.538 2147.63 542.014 2149.68L541.558 2151.81C533.082 2149.76 524.714 2147.72 516.297 2145.64L516.754 2143.51Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <path
                  d="M1113.37 7.05273C857.638 75.0405 691.252 130.525 419.75 240.01C265.135 302.359 160.718 349.057 94.9395 399.803C62.0738 425.157 38.8986 451.491 23.9316 481.25C8.96604 511.006 2.17188 544.259 2.17188 583.504C2.17194 613.853 8.02461 640.901 24.0537 666.256C40.0935 691.627 66.381 715.394 107.409 739.066C189.501 786.431 330.303 833.25 565.114 891.842C812.778 953.64 932.075 1019.04 989.682 1079.82C1047.39 1140.71 1043.09 1196.89 1044.1 1239.48V1239.52C1043.79 1259.24 1039.25 1277.68 1027.51 1295.61C1015.79 1313.52 996.931 1330.86 968.091 1348.46C910.437 1383.65 812.64 1420.07 651.411 1464.25L650.62 1464.46C508.96 1503.28 357.819 1544.7 242.087 1602.3C126.305 1659.92 46.4043 1733.52 46.4043 1836.5C46.4043 1888.17 60.2488 1929.16 84.1621 1962.42C108.086 1995.69 142.136 2021.3 182.644 2042.12C263.71 2083.78 370.327 2106.11 472.759 2132.43C478.709 2133.96 484.522 2135.44 490.242 2136.89L489.785 2139.01C484.038 2137.56 478.197 2136.07 472.218 2134.53C369.967 2108.26 262.999 2085.86 181.651 2044.05C140.952 2023.13 106.587 1997.33 82.3984 1963.68C58.199 1930.02 44.2324 1888.59 44.2324 1836.5C44.2324 1732.18 125.209 1658.04 241.119 1600.35C357.079 1542.64 508.446 1501.17 650.046 1462.37L658.348 1460.08C815.096 1416.84 910.487 1381.08 966.959 1346.61C995.63 1329.11 1014.21 1311.97 1025.7 1294.42C1037.17 1276.89 1041.62 1258.87 1041.92 1239.51C1040.92 1196.85 1045.16 1141.52 988.105 1081.32C930.944 1021 812.164 955.726 564.589 893.949C329.796 835.362 188.714 788.484 106.324 740.947C65.112 717.169 38.5092 693.184 22.2188 667.416C5.91787 641.632 6.28439e-05 614.154 0 583.504C0 543.999 6.8414 510.397 21.9912 480.274C37.1399 450.154 60.5607 423.582 93.6133 398.083C159.672 347.122 264.384 300.321 418.938 237.996C690.517 128.481 856.987 72.9653 1112.81 4.95312L1113.37 7.05273Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <path
                  d="M1113.37 7.05273C857.638 75.0405 691.252 130.525 419.75 240.01C265.135 302.359 160.718 349.057 94.9395 399.803C62.0738 425.157 38.8986 451.491 23.9316 481.25C8.96604 511.006 2.17188 544.259 2.17188 583.504C2.17194 613.853 8.02461 640.901 24.0537 666.256C40.0935 691.627 66.381 715.394 107.409 739.066C189.501 786.431 330.303 833.25 565.114 891.842C812.778 953.64 932.075 1019.04 989.682 1079.82C1047.39 1140.71 1043.09 1196.89 1044.1 1239.48V1239.52C1043.79 1259.24 1039.25 1277.68 1027.51 1295.61C1015.79 1313.52 996.931 1330.86 968.091 1348.46C910.437 1383.65 812.64 1420.07 651.411 1464.25L650.62 1464.46C508.96 1503.28 357.819 1544.7 242.087 1602.3C126.305 1659.92 46.4043 1733.52 46.4043 1836.5C46.4043 1888.17 60.2488 1929.16 84.1621 1962.42C108.086 1995.69 142.136 2021.3 182.644 2042.12C263.71 2083.78 370.327 2106.11 472.759 2132.43C478.709 2133.96 484.522 2135.44 490.242 2136.89L489.785 2139.01C484.038 2137.56 478.197 2136.07 472.218 2134.53C369.967 2108.26 262.999 2085.86 181.651 2044.05C140.952 2023.13 106.587 1997.33 82.3984 1963.68C58.199 1930.02 44.2324 1888.59 44.2324 1836.5C44.2324 1732.18 125.209 1658.04 241.119 1600.35C357.079 1542.64 508.446 1501.17 650.046 1462.37L658.348 1460.08C815.096 1416.84 910.487 1381.08 966.959 1346.61C995.63 1329.11 1014.21 1311.97 1025.7 1294.42C1037.17 1276.89 1041.62 1258.87 1041.92 1239.51C1040.92 1196.85 1045.16 1141.52 988.105 1081.32C930.944 1021 812.164 955.726 564.589 893.949C329.796 835.362 188.714 788.484 106.324 740.947C65.112 717.169 38.5092 693.184 22.2188 667.416C5.91787 641.632 6.28439e-05 614.154 0 583.504C0 543.999 6.8414 510.397 21.9912 480.274C37.1399 450.154 60.5607 423.582 93.6133 398.083C159.672 347.122 264.384 300.321 418.938 237.996C690.517 128.481 856.987 72.9653 1112.81 4.95312L1113.37 7.05273Z"
                  fill="currentColor"
                  className="op-0"
                ></path>
                <circle
                  cx="1111.09"
                  cy="6.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-30% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connec="step-1"
                ></circle>
                <circle
                  cx="186.086"
                  cy="341.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-17% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-2"
                ></circle>
                <circle
                  cx="105.086"
                  cy="739.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="-1% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-3"
                ></circle>
                <circle
                  cx="998.086"
                  cy="1092.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="13% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-4"
                ></circle>
                <circle
                  cx="582.086"
                  cy="1482.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="29% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-5"
                ></circle>
                <circle
                  cx="59.0859"
                  cy="1766.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="44% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-6"
                ></circle>
                <circle
                  cx="458.086"
                  cy="2129.5"
                  r="5.5"
                  fill="#ffffff"
                  stroke="currentColor"
                  strokeWidth="2"
                  data-tl-type="trigger"
                  data-tl-trigger=".about-card-container"
                  data-tl-start="58% top"
                  data-tl-from="{'opacity' : 0}"
                  data-tl-to="{'opacity': 1, 'duration': 0.6}"
                  data-connect="step-7"
                ></circle>
                <defs>
                  <linearGradient
                    id="paint0_linear_4101_214"
                    x1="568.737"
                    y1="380.366"
                    x2="568.737"
                    y2="1766.67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.201923" stopColor="#ffffff"></stop>
                    <stop
                      offset="0.240385"
                      stopColor="#ffffff"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4101_214"
                    x1="568.737"
                    y1="380.366"
                    x2="568.737"
                    y2="1766.67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.201923" stopColor="#ffffff"></stop>
                    <stop
                      offset="0.240385"
                      stopColor="#ffffff"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4101_214"
                    x1="568.737"
                    y1="380.366"
                    x2="568.737"
                    y2="1766.67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.201923" stopColor="#ffffff"></stop>
                    <stop
                      offset="0.240385"
                      stopColor="#ffffff"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mobile-timeline-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 15 2421"
              fill="none"
              className="mobile-timeline-icon"
            >
              <path
                d="M8.5 2421H5.5V2412H8.5V2421ZM8.5 2401H5.5V2392H8.5V2401ZM8.5 2381H5.5V0H8.5V2381Z"
                fill="currentColor"
              ></path>
              <circle
                cx="7"
                cy="743"
                r="5.5"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7"
                cy="414"
                r="5.5"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="49.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="1082.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="1415.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="1743.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="2078.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                cx="7.5"
                cy="2363.5"
                r="6"
                fill="#ffffff"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
