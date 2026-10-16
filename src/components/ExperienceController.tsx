"use client";

import { useEffect } from "react";

interface WindowWithGSAP extends Window {
  ScrollTrigger?: { refresh: () => void };
  lenis?: {
    scrollTo: (
      target: Element | string,
      options?: { duration?: number; offset?: number },
    ) => void;
  };
}

export default function ExperienceController() {
  useEffect(() => {
    const win = window as unknown as WindowWithGSAP;

    // ScrollSpy to toggle active navigation state (.w--current and .is-current)
    const updateActiveNav = () => {
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const workSection = document.getElementById("work");
      const servicesSection = document.getElementById("services");
      const testimonialSection = document.getElementById("testimonial");
      const faqSection = document.getElementById("faq");
      if (!heroSection || !aboutSection) return;

      const scrollPos = window.scrollY || window.pageYOffset;
      const threshold = window.innerHeight * 0.4;

      const aboutTop = aboutSection.getBoundingClientRect().top + scrollPos;
      const workTop = workSection
        ? workSection.getBoundingClientRect().top + scrollPos
        : Infinity;
      const servicesTop = servicesSection
        ? servicesSection.getBoundingClientRect().top + scrollPos
        : Infinity;
      const testimonialTop = testimonialSection
        ? testimonialSection.getBoundingClientRect().top + scrollPos
        : Infinity;
      const faqTop = faqSection
        ? faqSection.getBoundingClientRect().top + scrollPos
        : Infinity;

      const isFaqActive = Boolean(
        faqSection && scrollPos + threshold >= faqTop,
      );
      const isTestimonialActive =
        !isFaqActive &&
        Boolean(
          testimonialSection && scrollPos + threshold >= testimonialTop,
        );
      const isServicesActive =
        !isFaqActive &&
        !isTestimonialActive &&
        Boolean(servicesSection && scrollPos + threshold >= servicesTop);
      const isWorkActive =
        !isFaqActive &&
        !isTestimonialActive &&
        !isServicesActive &&
        Boolean(workSection && scrollPos + threshold >= workTop);
      const isAboutActive =
        !isFaqActive &&
        !isTestimonialActive &&
        !isServicesActive &&
        !isWorkActive &&
        scrollPos + threshold >= aboutTop;

      const isPastHero =
        isAboutActive ||
        isWorkActive ||
        isServicesActive ||
        isTestimonialActive ||
        isFaqActive;
      document.body.classList.toggle("is-scrolled", isPastHero);

      const heroNavLinks =
        document.querySelectorAll<HTMLElement>('a[href="#hero"]');
      const aboutNavLinks =
        document.querySelectorAll<HTMLElement>('a[href="#about"]');
      const workNavLinks = document.querySelectorAll<HTMLElement>(
        'a[href="#projects"]',
      );
      const servicesNavLinks = document.querySelectorAll<HTMLElement>(
        'a[href="#services"]',
      );
      const testimonialNavLinks = document.querySelectorAll<HTMLElement>(
        'a[href="#testimonial"]',
      );
      const faqNavLinks = document.querySelectorAll<HTMLElement>(
        'a[href="#faq"]',
      );

      const heroCardsWrap =
        document.querySelector<HTMLElement>(".hero-cards-wrap");
      if (heroCardsWrap) {
        if (
          isAboutActive ||
          isWorkActive ||
          isServicesActive ||
          isTestimonialActive ||
          isFaqActive
        ) {
          heroCardsWrap.style.opacity = "0";
          heroCardsWrap.style.visibility = "hidden";
          heroCardsWrap.style.pointerEvents = "none";
        } else {
          heroCardsWrap.style.opacity = "";
          heroCardsWrap.style.visibility = "";
          heroCardsWrap.style.pointerEvents = "";
        }
      }

      const applyActiveState = (
        activeLinks: NodeListOf<HTMLElement>,
        inactiveGroups: NodeListOf<HTMLElement>[],
      ) => {
        activeLinks.forEach((link) => {
          link.classList.add("w--current");
          const parentItem = link.closest(".nav-menu-item");
          if (parentItem) parentItem.classList.add("is-current");
        });
        inactiveGroups.forEach((group) => {
          group.forEach((link) => {
            link.classList.remove("w--current");
            const parentItem = link.closest(".nav-menu-item");
            if (parentItem) parentItem.classList.remove("is-current");
          });
        });
      };

      if (isFaqActive) {
        applyActiveState(faqNavLinks, [
          heroNavLinks,
          aboutNavLinks,
          workNavLinks,
          servicesNavLinks,
          testimonialNavLinks,
        ]);
      } else if (isTestimonialActive) {
        applyActiveState(testimonialNavLinks, [
          heroNavLinks,
          aboutNavLinks,
          workNavLinks,
          servicesNavLinks,
          faqNavLinks,
        ]);
      } else if (isServicesActive) {
        applyActiveState(servicesNavLinks, [
          heroNavLinks,
          aboutNavLinks,
          workNavLinks,
          testimonialNavLinks,
          faqNavLinks,
        ]);
      } else if (isWorkActive) {
        applyActiveState(workNavLinks, [
          heroNavLinks,
          aboutNavLinks,
          servicesNavLinks,
          testimonialNavLinks,
          faqNavLinks,
        ]);
      } else if (isAboutActive) {
        applyActiveState(aboutNavLinks, [
          heroNavLinks,
          workNavLinks,
          servicesNavLinks,
          testimonialNavLinks,
          faqNavLinks,
        ]);
      } else {
        applyActiveState(heroNavLinks, [
          aboutNavLinks,
          workNavLinks,
          servicesNavLinks,
          testimonialNavLinks,
          faqNavLinks,
        ]);
      }
    };

    // Smooth scroll for internal hashtag links (Lenis + native fallback)
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href && href !== "#") {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            e.stopPropagation();

            if (win.lenis && typeof win.lenis.scrollTo === "function") {
              win.lenis.scrollTo(el, { duration: 1.2 });
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
            window.history.replaceState(null, "", " ");

            setTimeout(updateActiveNav, 100);
            setTimeout(updateActiveNav, 500);
            setTimeout(updateActiveNav, 1300);
          }
        }
      }
    };

    // Click outside to close any open popup card modal
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".popup-card-wrap") &&
        !target.closest(".about-card-button")
      ) {
        const activePopups = document.querySelectorAll(
          ".popup-card-wrap.is-active-card",
        );
        activePopups.forEach((popup) => {
          popup.classList.remove("is-active-card");
          const parentCard = popup.closest<HTMLElement>(".about-card-wrap");
          if (parentCard) parentCard.style.zIndex = "5";
        });
      }
    };

    // Work section interactive video loader
    const FG_BASE = "https://f1-assets.b-cdn.net/nesh-work/Portfolio%20Work/";
    const ua = navigator.userAgent;
    const isSafari =
      /^((?!chrome|chromium|crios|fxios|edg|opr|android).)*safari/i.test(ua) ||
      /iP(ad|hone|od)/.test(ua);
    const canHover = window.matchMedia("(hover: hover)").matches;

    function loadBg(v: HTMLVideoElement) {
      if (v.src || !v.dataset.src) return;
      v.src = v.dataset.src;
      v.load();
    }

    function loadFg(v: HTMLVideoElement) {
      if (v.src) return;
      const file = isSafari && v.dataset.mov ? v.dataset.mov : v.dataset.webm;
      if (!file) return;
      v.src = FG_BASE + encodeURIComponent(file);
      v.load();
    }

    const cards = document.querySelectorAll<HTMLElement>(".work-card");

    if (canHover) {
      cards.forEach((card) => {
        const fg = card.querySelector<HTMLVideoElement>(".work-video");
        if (!fg) return;
        card.addEventListener("mouseenter", () => {
          loadFg(fg);
          fg.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => {
          fg.pause();
          fg.currentTime = 0;
        });
      });
    }

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const card = entry.target as HTMLElement;
            const bg = card.querySelector<HTMLVideoElement>(".work-bg");
            const fg = card.querySelector<HTMLVideoElement>(".work-video");

            if (entry.isIntersecting) {
              if (bg) {
                loadBg(bg);
                bg.play().catch(() => {});
              }
              if (fg) {
                loadFg(fg);
                if (!canHover) fg.play().catch(() => {});
              }
            } else {
              if (bg) bg.pause();
              if (fg) fg.pause();
            }
          });
        },
        { rootMargin: "300px" },
      );

      cards.forEach((card) => {
        io?.observe(card);
      });
    }

    const handleResize = () => {
      updateActiveNav();
      if (win.ScrollTrigger) {
        win.ScrollTrigger.refresh();
      }
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initial update
    updateActiveNav();

    // Refresh ScrollTrigger once loaded
    const timer = setTimeout(() => {
      if (win.ScrollTrigger) {
        win.ScrollTrigger.refresh();
      }
      updateActiveNav();
    }, 500);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (io) io.disconnect();
    };
  }, []);

  return null;
}
