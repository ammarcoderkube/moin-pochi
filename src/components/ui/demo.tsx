import React from "react";
import {
  CircularTestimonials,
  Testimonial,
} from "@/components/ui/circular-testimonials";

const testimonials: Testimonial[] = [
  {
    quote:
      "I started working with them a few months ago and can say that they are truly fantastic at their job. They are polite, friendly, very helpful and super professional. They are always able to please my IT needs and I can recommend them without hesitation. Thank you again for your great work and looking forward to future projects with you. Best regards",
    name: "Manuel Roessler",
    designation: "Founder, RechtEasy",
    source: "upwork",
    src: "/testimonial1.jpg",
    video: "/Manuel-R.mp4",
  },
  {
    quote:
      "Rock solid and simply the best developers on PHP and beyond!! CoderKube and their team always deliver first class work and in unbelievable quick time. Looking forward to next project with them!! Can highly recommend these guys, you won't be disappointed! A Superb service.",
    name: "Justin S.",
    designation: "Founder & Director",
    source: "upwork",
    src: "/testimonial2.jpeg",
    video: "/Justin-Simmons.mp4",
  },
  {
    quote:
      "I had a great experience working with a freelancer from the Upwork community. They were incredibly professional, attentive, and delivered exceptional results. From the start, they demonstrated excellent communication skills, understanding my project requirements and objectives with ease. I highly recommend this freelancer to anyone looking for top-notch services on Upwork.",
    name: "Rubia Moes",
    designation: "Verified Client",
    source: "google",
    src: "/testimonial3.jpg",
  },
  {
    quote:
      "Great company to work with. They have supported a number of projects now and I can highly recommend them. Their attention to detail, excellent communication, and flexibility makes them a stand out a developer.",
    name: "Tim's Digital",
    designation: "Digital Agency Lead",
    source: "google",
    src: "/testimonial4.jpg",
    video: "/Tim-R.mp4",
  },
  {
    quote:
      "Great team. They know exactly what they are doing. Support is also great. I am very satisfied about the result. Thank you, Moin. We will work again for the next job.",
    name: "Huseyin Talebe",
    designation: "Verified Client",
    source: "google",
    src: "/testimonial5.jpg",
  },
  {
    quote:
      "They are at their best when you feel you are lost! I came to them with a website needing work and a limited budget. They understood my anxiety and got right to work. They completed a lengthy list of areas needed to be fixed on the site and provided me with a VERY easy payment system.",
    name: "Gregory Solowsky",
    designation: "Verified Client",
    source: "google",
    src: "/testimonial6.jpg",
  },
  {
    quote:
      "I have worked with CoderKube on a number of projects over the past 18 months and had an excellent client experience. They are always precise in defining the brief and working quickly and efficiently to produce the desired result. I can thoroughly recommend them for both building a new site and also maintaining and upgrading existing pages.",
    name: "Jonathan Barber",
    designation: "Verified Client",
    source: "google",
    src: "/testimonial7.jpg",
  },
  {
    quote:
      "Adnan and the team at CoderKube have always been very professional and delivered a great service, with prompt responses and excellent communication. I have used them for several years now and they are my first call when I have any web or technology development needs. 5 Star service - highly recommended.",
    name: "Miles Timothy",
    designation: "Verified Client",
    source: "google",
    src: "/testimonial8.jpg",
  },
];

export const CircularTestimonialsDemo = () => (
  <section id="testimonial" className="circular-testimonials-showcase-section w-full py-6">
    <div id="client_column" className="column" style={{ marginBottom: "2rem" }}>
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

    <div className="w-full flex items-center justify-center relative">
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#09090b",
            designation: "#52525b",
            testimony: "#18181b",
            arrowBackground: "#09090b",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#0055ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "18px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);

export default CircularTestimonialsDemo;
