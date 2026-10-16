import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      data-flip-start-trigger=""
      data-flip-start="top top"
      className="hero"
    >
      <div className="hero-sticky">
        <div className="nesh-logo-preload">
          <div data-flip-origin="" className="nesh-logo-wrap">
            <div className="nesh-logo-ghost-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 1288 338"
                fill="none"
                data-flip-target=""
                className="nesh-logo-ghost"
                style={{ color: "var(--hero-watermark, #D0D4DC)" }}
              >
                {/* M */}
                <path
                  d="M109.46 35.28H218.34L260.35 198.23L302.19 35.28H410.71V303.1H343.11V98.85L290.68 303.1H229.48L177.23 98.85V303.1H109.46Z"
                  fill="currentColor"
                ></path>
                {/* O */}
                <path
                  d="M453.09 169.37Q453.09 103.78 489.63 67.25Q526.16 30.71 591.38 30.71Q658.24 30.71 694.42 66.61Q730.59 102.51 730.59 167.18Q730.59 214.13 714.79 244.18Q698.98 274.23 669.11 290.95Q639.25 307.66 594.67 307.66Q549.36 307.66 519.68 293.23Q489.99 278.80 471.54 247.56Q453.09 216.32 453.09 169.37ZM535.85 169.73Q535.85 210.29 550.92 228.01Q565.99 245.73 591.93 245.73Q618.60 245.73 633.22 228.38Q647.83 211.02 647.83 166.08Q647.83 128.26 632.58 110.82Q617.32 93.37 591.20 93.37Q566.17 93.37 551.01 111.09Q535.85 128.81 535.85 169.73Z"
                  fill="currentColor"
                ></path>
                {/* I */}
                <path
                  d="M778.45 35.28H861.39V303.1H778.45Z"
                  fill="currentColor"
                ></path>
                {/* N */}
                <path
                  d="M921.31 35.28H998.59L1099.43 183.44V35.28H1177.44V303.1H1099.43L999.14 156.03V303.1H921.31Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 9 9"
                fill="none"
                className="nesh-copyright-icon-ghost"
              >
                <path
                  d="M0.343933 5.97697C0.114645 5.44236 0 4.8828 0 4.29829C0 3.71378 0.114645 3.156 0.343933 2.62495C0.573221 2.0939 0.883118 1.6377 1.27362 1.25634C1.66413 0.871419 2.12808 0.56669 2.66547 0.342152C3.20645 0.114051 3.7743 0 4.36901 0C4.96373 0 5.52978 0.114051 6.06718 0.342152C6.60815 0.56669 7.0739 0.871419 7.4644 1.25634C7.85491 1.6377 8.1648 2.0939 8.39409 2.62495C8.62338 3.156 8.73802 3.71378 8.73802 4.29829C8.73802 5.07526 8.54277 5.7952 8.15226 6.45812C7.76176 7.11748 7.23153 7.63962 6.56158 8.02454C5.89163 8.40946 5.16077 8.60192 4.36901 8.60192C3.7743 8.60192 3.20645 8.48787 2.66547 8.25977C2.12808 8.03523 1.66413 7.73228 1.27362 7.35093C0.883118 6.96601 0.573221 6.50802 0.343933 5.97697ZM1.08017 4.29829C1.08017 4.7438 1.16615 5.16971 1.33811 5.57601C1.51008 5.97875 1.74295 6.32625 2.03672 6.61851C2.3305 6.91076 2.6798 7.14421 3.08464 7.31885C3.49306 7.48993 3.92118 7.57546 4.36901 7.57546C4.81684 7.57546 5.24317 7.48993 5.64801 7.31885C6.05643 7.14421 6.40752 6.91076 6.7013 6.61851C6.99507 6.32625 7.22794 5.97875 7.39991 5.57601C7.57546 5.16971 7.66324 4.7438 7.66324 4.29829C7.66324 3.85278 7.57546 3.42865 7.39991 3.02591C7.22794 2.6196 6.99507 2.27032 6.7013 1.97807C6.40752 1.68581 6.05643 1.45415 5.64801 1.28307C5.24317 1.11199 4.81684 1.02646 4.36901 1.02646C3.77071 1.02646 3.21899 1.17258 2.71384 1.46484C2.20869 1.75353 1.80922 2.14914 1.51545 2.65168C1.22526 3.15422 1.08017 3.70309 1.08017 4.29829ZM2.64398 6.58643V1.99945H4.91178C5.33811 1.99945 5.691 2.12954 5.97045 2.38972C6.25347 2.64633 6.39499 2.97958 6.39499 3.38945C6.39499 3.71378 6.29109 3.98821 6.0833 4.21275C5.87909 4.43729 5.62651 4.56916 5.32557 4.60836L5.26109 4.61905L6.34125 6.56505H5.0515L4.11644 4.75805H3.84237V6.58643H2.64398ZM3.84237 3.82783H4.74519C4.88491 3.82783 4.99597 3.79219 5.07837 3.72091C5.16436 3.64962 5.20735 3.55161 5.20735 3.42687C5.20735 3.29143 5.16615 3.18629 5.08375 3.11145C5.00135 3.0366 4.88849 2.99918 4.74519 2.99918H3.84237V3.82783Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="hero-navigation-wrap">
            <div className="hero-links-ghost-wrapper">
              <div className="ghost-link-item">
                <div data-link-id="home" className="hero-link-ghost">
                  home
                </div>
              </div>
              <div
                data-tl-to="{'opacity': 0, 'x': '0vw', 'y': '1vw'}"
                data-tl-type="scroll"
                data-tl-trigger=".hero"
                data-tl-start="top top"
                data-tl-end="5% top"
                data-tl-from="{'opacity': 1, 'x': '0vw', 'y': '0vw'}"
                className="hero-navigation-sep"
              ></div>
              <div className="ghost-link-item">
                <div data-link-id="about-me" className="hero-link-ghost">
                  about me
                </div>
              </div>
              <div
                data-tl-to="{'opacity': 0, 'x': '0vw', 'y': '1vw'}"
                data-tl-type="scroll"
                data-tl-trigger=".hero"
                data-tl-start="top top"
                data-tl-end="4% top"
                data-tl-from="{'opacity': 1, 'x': '0vw', 'y': '0vw'}"
                className="hero-navigation-sep"
              ></div>
              <div className="ghost-link-item">
                <div data-link-id="projects" className="hero-link-ghost">
                  projects
                </div>
              </div>
            </div>
            <div className="hero-links-ghost-wrapper is-hero-right-nav-item">
              <div className="ghost-link-item">
                <div data-link-id="services" className="hero-link-ghost">
                  services
                </div>
              </div>
              <div
                data-tl-to="{'opacity': 0, 'x': '0vw', 'y': '1vw'}"
                data-tl-type="scroll"
                data-tl-trigger=".hero"
                data-tl-start="top top"
                data-tl-end="2% top"
                data-tl-from="{'opacity': 1, 'x': '0vw', 'y': '0vw'}"
                className="hero-navigation-sep"
              ></div>
              <div className="ghost-link-item">
                <div data-link-id="clients" className="hero-link-ghost">
                  clients
                </div>
              </div>
              <div
                data-tl-to="{'opacity': 0, 'x': '0vw', 'y': '1vw'}"
                data-tl-type="scroll"
                data-tl-trigger=".hero"
                data-tl-start="top top"
                data-tl-end="1% top"
                data-tl-from="{'opacity': 1, 'x': '0vw', 'y': '0vw'}"
                className="hero-navigation-sep"
              ></div>
              <div className="ghost-link-item">
                <div data-link-id="faq" className="hero-link-ghost">
                  faq
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <p
            className="hero-left-text"
            data-tl-trigger=".hero"
            data-tl-split="lines"
            data-tl-end="28% top"
            data-tl-desktop=""
            data-tl-type="scroll"
            data-tl-to="{ 'y': '-100%', 'opacity': 0 }"
            data-tl-start="12% top"
            data-tl-from="{ 'y': '0%', 'opacity': 1 }"
          >
            Full Stack &amp; Architecture Specialist. That’s Moin.
          </p>
          <div className="hero-right-col">
            <h1
              className="hero-heading"
              data-tl-trigger=".hero"
              data-tl-split="lines"
              data-tl-end="28% top"
              data-tl-desktop=""
              data-tl-type="scroll"
              data-tl-to="{ 'y': '-100%', 'opacity': 0 }"
              data-tl-start="12% top"
              data-tl-from="{ 'y': '0%', 'opacity': 1 }"
            >
              I Am A Full Stack Developer.
            </h1>
            <p
              className="hero-right-text"
              data-tl-trigger=".hero"
              data-tl-split="lines"
              data-tl-end="28% top"
              data-tl-desktop=""
              data-tl-type="scroll"
              data-tl-to="{ 'y': '-100%', 'opacity': 0 }"
              data-tl-start="12% top"
              data-tl-from="{ 'y': '0%', 'opacity': 1 }"
            >
              11+ years building scalable web applications, enterprise digital platforms,
              and high-performance SaaS solutions with PHP, Laravel, MEAN &amp; LAMP stack.
            </p>
          </div>
          <div className="hero-cards-wrap">
            <div className="hero-cards-left">
              <div className="hero-card-2-wrap">
                <div data-flip-id="hero-card-2" className="hero-card-2">
                  <div className="hero-card-2-bg"></div>
                  <div className="hero-webflow-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 60 54"
                      fill="none"
                      data-flip-id="icon"
                      className="hero-webflow-icon"
                    >
                      <ellipse
                        cx="30"
                        cy="27"
                        rx="27"
                        ry="10"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      />
                      <ellipse
                        cx="30"
                        cy="27"
                        rx="27"
                        ry="10"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        transform="rotate(60 30 27)"
                      />
                      <ellipse
                        cx="30"
                        cy="27"
                        rx="27"
                        ry="10"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        transform="rotate(120 30 27)"
                      />
                      <circle cx="30" cy="27" r="4.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="hero-c-projects-text-wrap">
                    <p
                      id="projects_start_text"
                      data-flip-id="hero-card-2-text"
                      className="hero-webflow-projects-text"
                    >
                      85+
                      <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-card-1-wrap">
                <div className="hero-card-1">
                  <div className="experience-bg"></div>
                  <div className="experience-number-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 58 28"
                      fill="none"
                      className="experience-number"
                    >
                      <text
                        x="0"
                        y="23"
                        fontFamily="'Tr 3 A', Arial, sans-serif"
                        fontSize="25"
                        fontWeight="700"
                        letterSpacing="-1px"
                        fill="currentColor"
                      >
                        11+
                      </text>
                    </svg>
                  </div>
                  <div className="experience-text-wrap">
                    <p id="yrs_small_text_start" className="experience-text">
                      Years of <br />
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-content-layout">
              <div className="hero-buttons-wrap">
                <a
                  href="mailto:moinpochi@gmail.com?subject=Book%20a%20Call"
                  className="hero-cta-button"
                >
                  <p className="button-text">Book a Call</p>
                </a>
                <a href="#about" className="hero-button">
                  <p className="button-text">About Me</p>
                </a>
              </div>
            </div>
            <div
              data-tl-desktop=""
              data-tl-type="scroll"
              data-tl-trigger=".hero"
              data-tl-start="5% top"
              data-tl-end="20% top"
              data-tl-from="{'scale': 1, 'opacity': 1, 'x': '0vw', 'y': '0vw'}"
              data-tl-to="{'scale': 0.3, 'opacity': 0, 'x': '-25vw', 'y': '-5vw'}"
              className="hero-card-3"
            >
              <div className="hero-card-3-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="hero-card-3-icon"
                >
                  <path
                    d="M18.1767 11.4071C17.1458 15.2983 13.5104 18.1767 9.22398 18.1767C4.12366 18.1767 0 14.1256 0 9.06168C0 3.9978 4.12366 0 9.22398 0C13.2934 0 16.7659 2.6119 18.0139 6.18327C14.8126 7.14274 9.22398 9.06168 9.22398 9.06168L18.1767 11.4071Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Creative</p>
              </div>
              <div className="hero-card-3-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="hero-card-3-icon"
                >
                  <path
                    d="M16.841 10.3586C16.1506 9.66516 15.2934 9.24405 14.3993 9.08831C15.2934 8.93257 16.1506 8.5114 16.841 7.81797C18.6218 6.02947 18.6218 3.12982 16.841 1.34138C15.0602 -0.447068 12.173 -0.447068 10.3922 1.34138C9.63338 2.1035 9.20101 3.06774 9.0889 4.06146C9.06854 3.8842 9.04074 3.70646 8.99891 3.5285C8.42036 1.06686 5.96436 -0.457558 3.51329 0.123545C1.06227 0.704649 -0.455592 3.17124 0.123015 5.63289C0.554265 7.46749 2.02869 8.78011 3.76628 9.08992C2.87614 9.24722 2.02317 9.66807 1.33561 10.3586C-0.4452 12.1471 -0.4452 15.0468 1.33561 16.8353C3.11637 18.6238 6.00362 18.6238 7.78444 16.8353C8.54425 16.0722 8.97684 15.1065 9.08831 14.1115C9.19978 15.1066 9.63237 16.0723 10.3922 16.8353C12.173 18.6238 15.0602 18.6238 16.8411 16.8353C18.6219 15.0468 18.6218 12.1471 16.841 10.3586ZM9.08831 13.0824C8.97684 12.0873 8.54425 11.1217 7.78444 10.3586C7.09286 9.66403 6.2339 9.2427 5.33813 9.08761C5.42828 9.07185 5.51838 9.05921 5.60864 9.03779C7.53418 8.58128 8.87855 6.95987 9.0882 5.09257C9.19935 6.08811 9.6321 7.05445 10.3923 7.81792C11.0827 8.51129 11.9399 8.93246 12.834 9.0882C11.9398 9.24389 11.0826 9.66511 10.3922 10.3585C9.63237 11.1216 9.19978 12.0874 9.08831 13.0824Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Reliable</p>
              </div>
              <div className="hero-card-3-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="hero-card-3-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.29 5.15376C18.29 4.09113 17.4771 3.24102 16.461 3.24102C15.4449 3.24102 14.632 4.09113 14.632 5.15376C14.632 5.84447 14.632 8.50105 14.632 9.19176C14.632 10.2544 13.8191 11.1045 12.803 11.1045C11.7869 11.1045 10.974 10.2544 10.974 9.19176C10.974 8.50105 10.974 2.60345 10.974 1.91274C10.974 0.850105 10.1611 0 9.145 0C8.12889 0 7.316 0.850105 7.316 1.91274C7.316 2.60345 7.316 8.50105 7.316 9.19176C7.316 10.2544 6.50311 11.1045 5.487 11.1045C4.47089 11.1045 3.658 10.2544 3.658 9.19176C3.658 8.50105 3.658 5.84447 3.658 5.15376C3.658 4.09113 2.84511 3.24102 1.829 3.24102C0.812889 3.24102 0 4.09113 0 5.15376V14.8237C0 16.6302 1.37175 18.0647 3.09914 18.0647H15.0384C16.7658 18.0647 18.1376 16.6302 18.1376 14.8237L18.29 5.15376Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Strategist</p>
              </div>
              <div className="hero-card-3-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 19 22"
                  fill="none"
                  className="hero-card-3-icon"
                >
                  <path
                    d="M17.3256 12.9481L14.4763 10.808L17.3256 8.66787C18.3103 7.92827 18.3103 6.48246 17.3256 5.74279L10.1925 0.385134C9.50883 -0.128378 8.55529 -0.128378 7.87166 0.385134L0.738579 5.74279C-0.246193 6.48246 -0.246193 7.92821 0.738579 8.66787L3.58792 10.808L0.738642 12.9481C-0.24613 13.6877 -0.24613 15.1336 0.738642 15.8732L7.87178 21.2309C8.55542 21.7444 9.50895 21.7444 10.1926 21.2309L17.3257 15.8732C18.3104 15.1336 18.3103 13.6877 17.3256 12.9481Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Builder</p>
              </div>
              <div className="hero-card-3-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="hero-card-3-icon"
                >
                  <path
                    d="M15.855 8.75897C21.1849 15.3054 15.7305 20.6123 9.00227 15.4265C2.27397 20.6123 -3.18034 15.3054 2.14955 8.75897C-3.18034 2.21252 2.27403 -3.09438 9.00227 2.09146C15.7306 -3.09438 21.1849 2.21257 15.855 8.75897Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Efficient</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-hero-image-wrap">
          <img
            src="/moin-cutout.png"
            loading="lazy"
            fetchPriority="high"
            alt="Moin Pochi - Full Stack Developer"
            className="mobile-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
