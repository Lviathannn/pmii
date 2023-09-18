import BlogDetailSection from "@/section/blog/BlogDetailSection";
import { getData } from "@/utils/getData";

export async function generateMetadata({ params }) {
    const data = await getData(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_id}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post&fields.slug=${params.slug}`,
        { next: { revalidate: 30 } }
    );

    return {
        title: data.items[0].fields.title,
        description: data.items[0].fields.title,
        openGraph: {
            images: ["https:" + data.includes.Asset[0].fields.file.url],
        },
    };
}
export default function Slug({ params }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <BlogDetailSection slug={params.slug} />
        </main>
    );
}
