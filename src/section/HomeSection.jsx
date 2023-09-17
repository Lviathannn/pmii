"use client";
import HomeTitle from "@/components/Hometitle";
import Image from "next/image";
export default function Home() {
    return (
        <section className="w-full bg-primary px-8 pt-24 md:max-h-screen lg:px-24">
            <div className="flex flex-col items-center justify-center gap-20 pb-10 md:gap-28 lg:mb-0">
                <HomeTitle
                    title={"Media Pergerakan PMII Komisariat Darussalam Ciamis"}
                    subtitle={"Upgrade Your Knowledge and Skills with PMII"}
                />

                <Image
                    src="/banner.svg"
                    width={800}
                    height={800}
                    alt="Banner Image"
                    className="z-10 "
                    priority={true}
                />
            </div>
            <Image
                src="/shape1.svg"
                alt="Shape Image"
                width={200}
                height={200}
                className="absolute right-0 top-10 z-10 h-auto w-auto"
            />
            <Image
                src="/shape2.svg"
                alt="Shape Image"
                width={800}
                height={800}
                className="absolute right-0 top-0 z-0 h-full w-full "
            />
        </section>
    );
}
