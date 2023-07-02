import AboutSection from "@/section/AboutSection";
import HomeSection from "@/section/HomeSection";
import NewsSection from "@/section/NewsSection";
export default function Home({}) {
    return (
        <>
            <main className="overflow-x-hidden">
                <HomeSection />
                <AboutSection />
                <NewsSection />
            </main>
        </>
    );
}
