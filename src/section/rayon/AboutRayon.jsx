import Image from "next/image";
import AboutText from "@/components/AboutText";
import VisionText from "@/components/VisionText";

export default function AboutRayon() {
    return (
        <section className="relative flex min-h-screen flex-col gap-20 px-8 py-10 sm:py-28 lg:py-72 xl:px-24 xl:py-28 ">
            <Image
                src="/shape3.svg"
                width={250}
                height={250}
                alt="Shape Image"
                className="absolute -right-20 top-10 -z-10 md:-right-10"
            />
            <Image
                src="/decorator.svg"
                width={150}
                height={150}
                alt="Shape Image"
                className="absolute left-0 top-32 -z-10 h-auto w-auto"
            />
            <Image
                src="/decorator.svg"
                width={150}
                height={150}
                alt="Shape Image"
                className="absolute bottom-96 right-0 -z-10 h-auto w-auto rotate-180"
            />
            <Image
                src="/line.svg"
                width={450}
                height={450}
                alt="Shape Image"
                className="absolute right-0 top-10 -z-20"
            />
            <div className="flex flex-col items-center justify-center leading-none">
                <h2 className=" text-center text-[40px] font-bold text-primary">About Us</h2>
                <p className="text-base  font-semibold text-secondary">Tentang RAYON</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start xl:justify-around">
                <Image
                    src="/about2.svg"
                    width={400}
                    height={400}
                    alt="About Image"
                    priority={false}
                />
                <AboutText title={"RAYON Darussalam"}>
                    <p className="max-w-3xl text-base  leading-relaxed text-gray-600">
                        Rayon adalah salah satu lembaga akar Rumput dalam hirarki atau struktur PMII
                        secara umum pada wilayah Fakultas, sedangkan pada wilayah
                        Universitas/Institut disebut Komisariat dan tataran Provensi disebut
                        Pengurus Koordinator Cabang (PKC) serta pada level Nasional disebut Pengurus
                        Besar (PB PMII). Hal tersebut Sesuai dengan amanat prodak hukum Anggaran
                        Dasar/ Anggaran Rumah Tangga PMII (AD/ART) yang telah ditetapkan melalu
                        Musyawarah Pimpinan Nasional (MUSPIMNAS).
                    </p>
                    <p className="mt-5 max-w-3xl  text-base leading-relaxed text-gray-600">
                        Rayon sebagai garda terdepan dalam proses kaderisasi PMII yang berfungsi
                        untuk merekrut Anggota baru melalui MAPABA serta sebagai ruang akualisasi
                        diri dalam mengembangkan potensidan skill kader. Sebagaimana Anggaran Dasar/
                        Anggaran Rumah Tangga AD/ART PMII Bab VI tentang tujuan dan Usaha PMII
                        didirikan Pasal 4 yakni “ Terbentuknya Pribadi Muslim Indonesia yang
                        Bertaqwa Kepada Allah SWT. Berbudi Luhur, Berilmu, Cakap dan Bertanggung
                        Jawab Dalam Mengamalkan Ilmunya dan Komitmen Memperjuangkan Cita-Cita
                        Kemerdekaan Indonesia”. Maka berlandaskan tujuan tersebut Rayon sangat
                        menentukan pada proses keberlanjutan organisasi. Karena sangat berserntuhan
                        langsung dengan Anggota Atau kader dalam proses kaderisasi seutuhnya.
                    </p>
                </AboutText>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:items-start xl:justify-around"
                id="visi"
            >
                <VisionText
                    title={"Visi Dan Misi RAYON"}
                    mission={
                        "Memupuk pemahaman nilai nilai PMII kepada kader secara struktural serts Membentuk biro yang fokus mengembangkan minat bakat dan wawasan akademik masing-masing kader dan Merawat tradisi islam Ahlu Sunnah Wal Jama'ah."
                    }
                    vission={
                        "Membangun Kader Unggul yang Memahami Nilai-Nilai PMII, Berkembang dalam Minat dan Bakat, serta Merawat Tradisi Islam Ahlu Sunnah Wal Jama'ah"
                    }
                />

                <Image
                    src="/about3.svg"
                    width={400}
                    height={400}
                    alt="About Image"
                    priority={true}
                />
            </div>
        </section>
    );
}
