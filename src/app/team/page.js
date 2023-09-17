import TeamSection from "@/section/team/TeamSection";

export const metadata = {
    title: "Anggota PMII",
    description: "Anggota PMII Periode 2023 - 2024",
};

export default function Team() {
    return (
        <>
            <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden">
                <TeamSection />
            </main>
        </>
    );
}
