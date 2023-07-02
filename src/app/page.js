import AboutSection from "@/section/AboutSection";
import HomeSection from "@/section/HomeSection";
export default function Home({}) {
    return (
        <>
            <main className="overflow-x-hidden">
                <HomeSection />
                <AboutSection />
            </main>
        </>
    );
}
