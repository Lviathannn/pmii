import GenderSection from "@/section/kopri/GenderSection";
import KopriSection from "@/section/kopri/KopriSection";

export default function Kopri() {
    return (
        <>
            <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden">
                <KopriSection />
                <GenderSection />
            </main>
        </>
    );
}
