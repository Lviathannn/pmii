import Image from "next/image";

export default function Home() {
    return (
        <section className="max-h-screen w-full bg-primary px-8 pt-24 lg:px-24">
            <Image
                content="fill"
                src="/shape1.svg"
                alt="Shape Image"
                width={200}
                height={200}
                className="absolute right-0 top-0 h-auto w-auto"
            />
            <Image
                content="fill"
                src="/shape2.svg"
                alt="Shape Image"
                width={800}
                height={800}
                className="absolute right-0 top-0 z-0 h-full w-full "
            />
            <div className="flex flex-col items-center justify-center gap-20 pb-10 md:gap-28 lg:mb-0">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-[45px] font-bold  leading-none text-white lg:text-[70px]">
                        Selamat Datang
                        Di <br />
                        <span className="text-secondary">
                            Media
                            Pergerakan
                        </span>
                    </h1>
                    <h4 className="text-center text-lg text-white">
                        Upgrade Your
                        Knowledge and
                        Skills with PMII
                        <br />
                        We are
                        Indonesian
                        Moslem Student
                        Movement
                    </h4>
                </div>
                <Image
                    src="/banner.svg"
                    width={800}
                    height={800}
                    alt="Banner Image"
                    className="z-20"
                    priority={true}
                />
            </div>
        </section>
    );
}
