import BlogSection from "@/section/blog/BlogSection";
export const metadata = {
    title: "Blog PMII",
    description: "Blog PMII Periode 2023 - 2024",
};

export default function Blog() {
    return (
        <>
            <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden">
                <BlogSection />
            </main>
        </>
    );
}
