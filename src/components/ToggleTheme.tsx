"use client";

import { MoonIcon , SunIcon } from "@src/constants/logos";

import { useTheme } from "next-themes";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        setTheme((currentTheme) => { return currentTheme === 'dark' ? 'light' : 'dark' })
    };

    return (
        <button onClick={toggle} className={`inline-block text-sm p-3 rounded-full border border-divider hover:border-bg-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-500 group capitalize`}>
            {theme === 'light' ? <MoonIcon className="size-4 text-accent" /> : <SunIcon className="size-4 text-accent" />}
        </button>
    );
}
