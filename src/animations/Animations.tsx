"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Animations({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const page = useRef(null);

    useGSAP(() => {
        // Hero
        const heroSectionAnimations = gsap.timeline({
            defaults: {
                ease: 'power4',
                stagger: .5
            }
        });

        heroSectionAnimations.fromTo('.hero-text', {
            y: -100
        }, {
            y: 0
        })
        heroSectionAnimations.fromTo('.hero-para', {
            opacity: 0
        }, {
            opacity: 1
        })
        heroSectionAnimations.fromTo('.tools-wrapper', {
            opacity: 0
        }, {
            opacity: 1
        })

        // Tools Marquee
        let currentScroll = 0;
        let isScrollingDown = true;

        let marqueeAnim = gsap.to(".tools", { xPercent: -100, repeat: -1, duration: 20, ease: "linear" }).totalProgress(1);

        window.addEventListener("scroll", function () {

            if (window.scrollY > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            gsap.to(marqueeAnim, {
                timeScale: isScrollingDown ? 1 : -1
            });

            currentScroll = window.scrollY
        });

    }, [page]);


    return (
        <html ref={page} lang="en">
            {children}
        </html>
    )
}