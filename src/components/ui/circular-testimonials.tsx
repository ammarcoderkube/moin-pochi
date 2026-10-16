"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight, FaVideo, FaTimes } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  quote: string;
  name: string;
  designation?: string;
  src: string;
  source?: "upwork" | "google" | string;
  video?: string;
}
export interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
export interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
export interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials = [],
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => (testimonialsLength > 0 ? testimonials[activeIndex % testimonialsLength] : null),
    [activeIndex, testimonials, testimonialsLength]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (testimonialsLength === 0) return;
    setIsPlayingVideo(false);
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    if (testimonialsLength === 0) return;
    setIsPlayingVideo(false);
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Autoplay (pauses when user is actively watching a video)
  useEffect(() => {
    if (autoplay && !isPlayingVideo && testimonialsLength > 1) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, isPlayingVideo, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    if (testimonialsLength <= 1) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!activeTestimonial) {
    return null;
  }

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images & Video Container */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={testimonial.src}
                className="testimonial-card-wrap"
                style={getImageStyle(index)}
              >
                {isActive && isPlayingVideo && testimonial.video ? (
                  <div className="video-player-container">
                    <video
                      src={testimonial.video}
                      controls
                      autoPlay
                      playsInline
                      className="testimonial-video"
                      onEnded={() => setIsPlayingVideo(false)}
                    />
                    <button
                      className="video-close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlayingVideo(false);
                      }}
                      aria-label="Close video"
                      title="Close video"
                    >
                      <FaTimes size={12} />
                      <span>Close</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="testimonial-image"
                      data-index={index}
                    />
                    {isActive && testimonial.video && (
                      <button
                        className="video-trigger-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlayingVideo(true);
                        }}
                        aria-label="Watch video testimonial"
                        title="Watch video testimonial"
                      >
                        <span className="video-btn-ripple" />
                        <FaVideo size={16} />
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <div className="designation-source-row">
                {activeTestimonial.designation && (
                  <span
                    className="designation"
                    style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                  >
                    {activeTestimonial.designation}
                  </span>
                )}
                {activeTestimonial.source && (
                  <div className="source-badge">
                    <span className="source-label">Fetched From:</span>
                    {activeTestimonial.source === "upwork" ? (
                      <span className="source-tag upwork-tag">
                        <SiUpwork className="source-icon upwork-icon" size={16} />
                        <span>Upwork</span>
                      </span>
                    ) : (
                      <span className="source-tag google-tag">
                        <FcGoogle className="source-icon google-icon" size={16} />
                        <span>Google</span>
                      </span>
                    )}
                  </div>
                )}
              </div>
              <motion.p
                className="quote"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={28} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={28} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1000px;
        }
        .testimonial-card-wrap {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .video-trigger-btn {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 50%;
          background: #09090b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
          z-index: 10;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }
        .video-trigger-btn:hover {
          transform: scale(1.1);
          background: #0055ff;
        }
        .video-btn-ripple {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #0055ff;
          animation: pulse-ring 2.2s infinite ease-in-out;
          pointer-events: none;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.25);
            opacity: 0;
          }
          100% {
            transform: scale(0.9);
            opacity: 0;
          }
        }
        .video-player-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          z-index: 5;
        }
        .testimonial-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          display: block;
        }
        .video-close-btn {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          background: rgba(15, 15, 20, 0.85);
          backdrop-filter: blur(10px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          z-index: 50;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .video-close-btn:hover {
          background: rgba(0, 0, 0, 1);
          transform: scale(1.05);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .designation-source-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }
        .designation {
          margin-bottom: 0;
        }
        .source-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          background: #ffffff;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .source-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: #71717a;
        }
        .source-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 600;
          font-size: 0.82rem;
          color: #18181b;
        }
        .upwork-icon {
          color: #14a800;
        }
        .quote {
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
