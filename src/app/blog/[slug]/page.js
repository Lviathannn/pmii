import BlogDetailSection from "@/section/blog/BlogDetailSection";

export default function Slug({ params }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <BlogDetailSection slug={params.slug} />
        </main>
    );
}
