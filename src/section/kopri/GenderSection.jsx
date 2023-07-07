import Button from "@/components/Button";
import Image from "next/image";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function GenderSection() {
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
                <p className="text-base  font-semibold text-secondary">Tentang KOPRI</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start xl:justify-around">
                <Image
                    src="/about2.svg"
                    width={400}
                    height={400}
                    alt="About Image"
                    priority={true}
                />
                <article className="flex flex-col gap-3">
                    <h3 className="mb-5 text-3xl font-bold text-primary">
                        Korps Pergerakan Mahasiswa Islam Indonesia Putri
                    </h3>
                    <p className="max-w-3xl text-base  leading-relaxed text-gray-600">
                        Korps Pergerakan Mahasiswa Islam Indonesia Putri (KOPRI) merupakan lembaga
                        perempuan yang berada dalam tubuh PMII. Kopri menjadi bagian aset
                        pemberdayaan perempuan di PMII. Bersifat Independen dan mempunyai Garis
                        koordinasi dengan Cabang yang fokus pada persoalan perempuan di PMII dan
                        isu-isu perempuan secara umum
                    </p>
                    <h3 className="mb-5 text-3xl font-bold text-primary">Gender</h3>
                    <p className="max-w-3xl text-base  leading-relaxed text-gray-600">
                        Gender adalah perbedaan peran, fungsi dan tanggung jawab antara laki-laki
                        dan perempuan yang merupakan hasil kontruksi sosial dan dapat berubah sesuai
                        perkembangan zaman
                    </p>
                    <div className="">
                        <Button
                            text="Explore"
                            icon={<PaperAirplaneIcon className="h-5 w-5 text-white " />}
                        />
                    </div>
                </article>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:items-start xl:justify-around">
                <article className="flex flex-col gap-3">
                    <h3 className="mb-5 text-3xl font-bold text-primary">Visi Dan Misi PMII</h3>

                    <div className="flex items-start gap-7">
                        <Image
                            src="/target.png"
                            width={60}
                            height={50}
                            className="h-8 w-8"
                            alt="Visi Image"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-primary">Misi</h3>
                            <p className="max-w-3xl text-gray-600">
                                Terciptanya Kopri PMII yang cerdas, aktif dan bermatabat dalam
                                menghadapi gelombang transformasi digital.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <Image
                            src="/eye.png"
                            width={60}
                            height={50}
                            className="h-10 w-10"
                            alt="Visi Image"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-primary">Visi</h3>
                            <p className="max-w-3xl text-gray-600">
                                Mengkonsolidasikan seluruh aktifits anggota kader dibidang
                                intelektual dan teknologi informasi. Mendukung kegiatan yang
                                mendorong sikap humanis dan anti intoleran, Menstimulir proses
                                ketahanan anggota dan kader dengan integritas komunal bukan individu
                                ,Memperbaiki citra Kopri PMII Cabang Ciputat melalui pelaksanaan,
                                peran dan peningkatan kualitas sumber daya anggota yang profesional
                            </p>
                        </div>
                    </div>
                </article>
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
