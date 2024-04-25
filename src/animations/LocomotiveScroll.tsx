"use client";

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function LocomotiveScrollComponent() {
    useEffect(() => {
        // ? maybe cause error on production
        const scroll = new LocomotiveScroll({ smooth: true });

        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, []);

    return <></>;
}