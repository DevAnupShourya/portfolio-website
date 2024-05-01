"use client";
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function LocomotiveScrollComponent() {
    useEffect(() => {
        let scroll: LocomotiveScroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                smooth: true,
                smartphone: { smooth: false },
                resetNativeScroll: true
            });
        });

        return () => {
            if (scroll) scroll.destroy();
        }
    }, []);

    return <></>;
}
