import NotFound from '@src/app/not-found';
import { BlogsList } from '@src/constants/index';

export default function BlogPage({
    params,
}: {
    params: { blogSlug: string }
}) {

    const BlogComponentName = BlogsList.filter((blg) => {
        return blg.title.replaceAll(' ', '-') === params.blogSlug;
    });
    const Blog = BlogComponentName.length === 0 ? null : BlogComponentName[0].ComponentName;

    return (
        <section className={`my-14 max-sm:px-2`}>
            {Blog === null ? (
               <NotFound/>
            ) : (
                Blog !== null && <Blog />
            )}
        </section>
    );
}
