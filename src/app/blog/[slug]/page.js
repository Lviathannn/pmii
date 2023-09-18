import BlogDetailSection from "@/section/blog/BlogDetailSection";

export async function generateMetadata({ params }) {
    const data = await fetch(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_id}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post&fields.slug=${params.slug}`
    ).then((res) => res.json());

    console.log(data);
    return {
        title: data.items[0].fields.title,
        openGraph: {
            images: "https:" + data.includes.Asset[0].fields.file.url,
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
