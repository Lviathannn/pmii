import GenderSection from "@/section/kopri/GenderSection";
import KopriSection from "@/section/kopri/KopriSection";

export const metadata = {
    title: "KOPRI Darussalam",
    description:
        "Korps Pergerakan Mahasiswa Islam Indonesia Putri (KOPRI) merupakan lembaga perempuan yang berada dalam tubuh PMII. Kopri menjadi bagian aset pemberdayaan perempuan di PMII. Bersifat Independen dan mempunyai Garis koordinasi dengan Cabang yang fokus pada persoalan perempuan di PMII dan isu-isu perempuan secara umum",
};

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
