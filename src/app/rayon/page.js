import AboutRayon from "@/section/rayon/AboutRayon";
import RayonSection from "@/section/rayon/RayonSection";

export default function Rayon() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <RayonSection />
                <AboutRayon />
            </main>
        </>
    );
}
