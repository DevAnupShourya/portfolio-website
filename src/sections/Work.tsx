"use client";

import { useRef } from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WorkCard from "@src/components/WorkCard";
import { Projects } from "@src/constants";

function Work() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = document.querySelectorAll('.work-card');
    const cardsContainer = document.querySelectorAll('#work-cards-container');

    const distance = () => {
      const lastCardBounds = cards[cards.length - 1].getBoundingClientRect(),
        containerBounds = container.current!.getBoundingClientRect();

      return Math.max(0, lastCardBounds.right - containerBounds?.right);
    };

    gsap.to(container.current, {
      x: () => -distance(),
      scrollTrigger: {
        trigger: container.current,
        start: "bottom 90%",
        scrub: true,
        pinnedContainer: cardsContainer,
        end: () => "+=" + distance(),
        pin: cardsContainer,
        invalidateOnRefresh: true
      }
    });

    gsap.to(".work-card", {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "restart none none reverse"
      }
    });

  }, [container.current]);

  return (
    <section data-scroll-section id="works" className="global-section-padding my-10">
      <div
        ref={container}
        id="work-cards-container"
        className="flex-r-btw gap-20 max-lg:flex-col max-lg:gap-10"
      >
        {Projects.map((project) => {
          return (
            <WorkCard
              key={project.image}
              image={project.image}
              logo={project.logo}
              name={project.name}
              type={project.type}
              date={project.date}
              desc={project.desc}
              link={project.link}
              underDevelopment={project.underDevelopment}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Work;
