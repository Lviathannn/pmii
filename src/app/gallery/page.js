import GallerySection from "@/section/gallery/GallerySection";

export const metadata = {
    title: "Gallery PMII",
    description: "Gallery PMII Periode 2023 - 2024",
};

export default function Team() {
    return (
        <>
            <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden">
                <GallerySection />
            </main>
        </>
    );
}
