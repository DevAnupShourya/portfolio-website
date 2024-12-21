import Image from "next/image";
import Link from "next/link";
import { HouseIcon } from "@src/constants/logos";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404',
  description: 'This page in not available.',
};

export default function NotFound() {
    return (
        <section className="w-screen h-screen mx-auto   grid place-items-center">
            <div className="max-w-screen-sm text-center">
                <Image src='/Logo.png' width={128} height={128} alt="Anup Shourya Logo" className="mx-auto" />
                <h1 className="text-text-primary text-xl my-4">Page Not Found</h1>
                <p className="text-text-secondary text-sm">Sorry! The page you are looking for does not exist.</p>
                <Link href='/' className={`inline-block text-xs p-3 rounded-full border border-divider hover:border-bg-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-500 group capitalize flex-r-btw flex-nowrap my-4 max-w-fit mx-auto`}>
                    <HouseIcon className="size-4" />&nbsp; Home Page
                </Link>
            </div>
        </section>
    );
}
