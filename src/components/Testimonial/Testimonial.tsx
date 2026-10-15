"use client";

import React, { useState, useRef, useEffect } from "react";

interface TestimonialItem {
  id: number;
  heading: React.ReactNode;
  quote: string;
  author: string;
  title: string;
  company?: string;
  link?: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    heading: (
      <>
        Trusted <br />
        long-term collaborator.
      </>
    ),
    quote:
      "Moin has been a fantastic partner to work with and continues to be an essential part of our team. He communicates clearly and promptly, and his work consistently exceeds expectations. He resolves technical challenges quickly and efficiently, always demonstrating skill, reliability, and a strong commitment to quality.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da98bd68220e4f1d95_Danette%20Beal.avif",
    author: "Danette Beal",
    title: "VP of Marketing",
    link: "https://www.alosant.com/",
    company: "Alosant.com",
  },
  {
    id: 2,
    heading: (
      <>
        Thinks through <br />
        the entire experience.
      </>
    ),
    quote:
      "Moin doesn't just write full-stack code—he thinks through the entire product experience. Motion, performance, architecture: all aligned with technical excellence. The result is web applications that feel cohesive, intentional, and fast. A true partner in execution. No gaps, no compromises.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6985e810b5401268eec901f2_petar_s.jpeg",
    author: "Petar Stojakovic",
    title: "Founder",
    link: "https://www.fiftyseven.co/",
    company: "fiftyseven.co",
  },
  {
    id: 3,
    heading: (
      <>
        Reliable, skilled, <br />
        and easy to work with.
      </>
    ),
    quote:
      "Moin was great to work with! He delivered our websites on time, gave our design team helpful guidance, and suggested smarter solutions that really improved the final results. Super reliable and easy to collaborate with — highly recommend!",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da275434728f43945b_Klemen%20Vute.avif",
    author: "Klemen Vute",
    title: "PM from Povio",
    link: "https://povio.com/",
    company: "Povio.com",
  },
  {
    id: 4,
    heading: (
      <>
        The details that <br />
        set him apart.
      </>
    ),
    quote:
      "I’ve worked with Moin for many years, and he still surprises me with the speed and quality of his work. His attention to the small details, the ones most engineers overlook makes all the difference for great websites. He’s reliable, fun to collaborate with, and consistently delivers beyond expectations. As long as he wants to work with us, we’ll keep building together.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6942a06175766f34258d7ba2_testimonial.avif",
    author: "Johanna Dahlroos",
    title: "Co-Founder and Creative Director",
    link: "https://www.moat-studio.com/",
    company: "Moat Agency",
  },
  {
    id: 5,
    heading: (
      <>
        Design-focused, <br />
        reliable development.
      </>
    ),
    quote:
      "We’ve hired Moin for several projects, and working with him has always been effortless thanks to his good understanding of design. He’s dedicated to perfecting each delivery for our clients, ensuring a smooth and engaging web experience.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da5c13ee5098356e14_Marko%20Ivanvoic.avif",
    author: "Marko Ivanovic",
    title: "Legacy Agency",
  },
  {
    id: 6,
    heading: (
      <>
        A developer with a <br />
        true product mindset.
      </>
    ),
    quote:
      "Moin is a rare blend of speed, quality, and collaboration. He actively contributes ideas that improve how designs translate into development, and he approaches every build with a product mindset. He’s reliable, detail-oriented, and consistently delivers high-quality work on tight timelines.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7dac698cc34d76e4278_Chrissy.avif",
    author: "Chrissy Cowdrey",
    title: "Product/Web Designer",
  },
  {
    id: 7,
    heading: (
      <>
        A proven <br />
        expert you trust.
      </>
    ),
    quote:
      "I’ve been working with Moin for years and have always been impressed by his work ethic, fast turnaround, and attention to detail. Moin clearly knows his craft, takes a thoughtful and disciplined approach to his work, and consistently delivers results that meet a high professional standard.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da184f7fad9ddaeb59_Marko%20Ilic.avif",
    author: "Marko Ilic",
    title: "Founder",
    link: "https://see.design/",
    company: "see.design",
  },
  {
    id: 8,
    heading: (
      <>
        Exceptional leadership <br />
        and technical ownership.
      </>
    ),
    quote:
      "We loved working with Moin on the Autorank website. He showed exceptional leadership throughout the project, taking full ownership of the website infrastructure and guiding key technical decisions. His structured approach and attention to quality ensured a reliable and scalable outcome.",
    avatar:
      "https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da275434728f43945f_Bart.avif",
    author: "Bart-Jan Leyts",
    title: "CEO",
    link: "https://www.autorank.com/",
    company: "Autorank.com",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(453);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Keep card width aligned with the old site (453px on desktop, fluid on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 768) {
        setCardWidth(Math.min(window.innerWidth - 48, 453));
      } else {
        setCardWidth(453);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && activeIndex < testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (diff < -50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="testimonial" className="testimonial_section">
      <div className="container">
        <div id="client_column" className="column">
          <div
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#client_column"
            data-tl-start="top 90%"
            data-tl-from="{ 'width': '0vw', 'opacity': 0 }"
            data-tl-to="{ 'width': 'auto', 'opacity': 1, 'duration': 0.7, 'ease': 'expo.inOut' }"
            className="label"
            style={{ opacity: 1, width: "auto" }}
          >
            TESTIMONIALS
          </div>

          <h2
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#client_column"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{ 'yPercent': 100 }"
            data-tl-to="{ 'yPercent': 0, 'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out' }"
            className="h2-style margin-bottom-s"
          >
            From People <br />
            I&apos;ve Worked with
          </h2>
        </div>

        <div className="swiper-main-wrap">
          {/* Pagination Bullets */}
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`swiper-bullet ${idx === activeIndex ? "is-active" : ""}`}
                tabIndex={0}
                role="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Swiper Slider Track */}
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              overflow: "visible",
              width: `${cardWidth}px`,
              alignSelf: "flex-start",
            }}
          >
            <div
              className="swiper-wrapper"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                height: "auto",
                minHeight: "405px",
                transform: `translate3d(-${activeIndex * (cardWidth + 14)}px, 0px, 0px)`,
                transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={item.id}
                  className={`swiper-slide ${idx === activeIndex ? "swiper-slide-active" : idx === activeIndex + 1 ? "swiper-slide-next" : ""}`}
                  role="group"
                  aria-label={`${item.id} / ${testimonials.length}`}
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: "14px",
                    flex: `0 0 ${cardWidth}px`,
                    display: "flex",
                  }}
                >
                  <div className="swiper-card">
                    <div className="column">
                      <div className="swiper-card-top">
                        <h3 className="swiper-heading">{item.heading}</h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 30 30"
                          fill="none"
                          className="swiper-quote-icon"
                        >
                          <rect
                            width="30"
                            height="30"
                            rx="4.5"
                            fill="#ffffff"
                          />
                          <path
                            d="M9.75 20.07V17.97C11.01 17.76 11.91 16.98 11.91 15.06H9.75V10.5H14.31V15.06C14.31 17.76 12.69 19.65 9.75 20.07ZM15.75 20.07V17.97C17.01 17.76 17.91 16.98 17.91 15.06H15.75V10.5H20.31V15.06C20.31 17.76 18.69 19.65 15.75 20.07Z"
                            fill="black"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </div>
                      <p>{item.quote}</p>
                    </div>

                    <div className="swiper-card-bottom">
                      <img
                        src={item.avatar}
                        loading="lazy"
                        alt={`${item.author} | ${item.title}`}
                        className="client-img"
                      />
                      <div className="client-info">
                        <p className="text-weight-medium">{item.author}</p>
                        <p className="client-text-small">{item.title}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="client-text-link"
                          >
                            {item.company}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>

      {/* Drag follower cursor element for GSAP / script.js */}
      <div className="drag-wrap">
        <div className="drag-circle">Drag</div>
      </div>
    </section>
  );
}
