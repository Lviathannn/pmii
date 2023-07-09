"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
    return (
        <section className="max-h-screen w-full bg-primary px-8 pt-24 lg:px-24">
            <div className="flex flex-col items-center justify-center gap-20 pb-10 md:gap-28 lg:mb-0">
                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-5 md:items-center"
                >
                    <h1 className="text-[45px] font-bold  leading-none text-white lg:text-[82px]">
                        Selamat Datang Di <br />
                        <span className="text-secondary">Media Pergerakan</span>
                    </h1>
                    <h4 className="text-lg text-white">
                        Upgrade Your Knowledge and Skills with PMII
                    </h4>
                </motion.div>
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/banner.svg"
                        width={800}
                        height={800}
                        alt="Banner Image"
                        className="z-10 "
                        priority={true}
                    />
                </motion.div>
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
