import Image from "next/image";
import type { Metadata } from "next";
import { BlogsList } from '@src/constants/index'
import Link from "next/link";
import { ArrowUpRightIcon } from "@src/constants/logos";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Articles Page | Anup Shourya | Full Stack Developer",
};

export default function BlogsPage() {
    return (
        <section className="my-14 max-sm:px-2">
            <h1 className="t-heading">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BlogsList.map((blog, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-red-100/0 hover:shadow-md hover:border-highlight transition-all duration-500 p-3">
                        <div className="aspect-video">
                            <Image
                                width={1280}
                                height={720}
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="py-4">
                            <Link href={`/blogs/${blog.title.replaceAll(' ', '-')}`} target="_blank" className="text-lg font-semibold text-text-primary mb-2 flex flex-nowrap justify-between items-center">
                                {blog.title} <ArrowUpRightIcon className="inline-block size-8"/>
                            </Link>
                            <p className="text-sm text-text-secondary line-clamp-3">
                                {blog.description}
                            </p>
                        </div>
                        <h3 className="text-xs text-text-secondary float-end">
                            - {blog.publishedOn}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
