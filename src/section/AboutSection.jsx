import Image from "next/image";
import AboutText from "@/components/AboutText";
import VisionText from "@/components/VisionText";

export default function AboutSection() {
    return (
        <section className="relative flex min-h-screen flex-col gap-20 px-8 pt-10 md:pt-32 lg:px-24 lg:pt-96">
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
                <p className="text-base  font-semibold text-secondary">Tentang PMII</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start xl:justify-around">
                <Image
                    src="/about.svg"
                    width={400}
                    height={400}
                    alt="About Image"
                    priority={true}
                />
                <AboutText title={"Pergerakan Mahasiswa Islam Indonesia"}>
                    Pergerakan Mahasiswa Islam Indonesia (atau yang disingkat sebagai PMII),
                    merupakan organisasi kemahasiswaan yang berdiri pada tanggal 17 April 1960 di
                    Surabaya. Pendirian PMII dimotori oleh kalangan muda Nahdlatul Ulama (NU)
                    (meskipun di kemudian hari dengan dicetuskannya Deklarasi Murnajati 14 Juli
                    1972, PMII menyatakan bahwa mereka akan mengambil tindakan independen dari NU).
                    Ketua Umum pertama adalah Mahbub Djunaidi.
                    <br /> <br />
                    Pergerakan ini didirikan oleh 13 orang, yaitu A. Khalid Mawardi, M. Said
                    Budairy, M. Sobich Ubaid, Makmun Syukri, Hilman Badruddinsyah, Ismail Makki,
                    Munsif Nakhrowi, Nuril Huda Suaidi, Laily Mansyur, Abd. Wahhab Jaelani,
                    Hizbulloh Huda, M. Kholid Narbuko, dan Ahmad Hussein.
                </AboutText>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:items-start xl:justify-around"
                id="visi"
            >
                <VisionText
                    title={"Visi Dan Misi PMII"}
                    mission={
                        "Terbentuknya pribadi muslim Indonesia yang bertakwa kepada Allah Swt, Berbudi luhur, berilmu, cakap dan bertanggungjawab dalam mengamalkan ilmunya serta komitmen memperjuangkan cita-cita kemerdekaan Indonesia."
                    }
                    vission={"Transformasi Organisasi untuk PMII Maju dan Mendunia"}
                />

                <Image
                    src="/about2.svg"
                    width={400}
                    height={400}
                    alt="About Image"
                    priority={true}
                />
            </div>
        </section>
    );
}
