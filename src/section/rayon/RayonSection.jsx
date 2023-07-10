"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function KopriSection() {
    return (
        <section className="w-full bg-primary px-8 pt-24 lg:min-h-screen lg:px-24">
            <div className="relative z-10 flex  flex-col items-center justify-between gap-10 pb-10 md:gap-28 lg:mb-0 lg:pt-20 xl:flex-row">
                <motion.div
                    className="flex flex-col gap-5 md:items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold  leading-none text-white lg:text-[82px]">
                        Selamat Datang Di <br />
                        <span className="text-secondary">Kopri Darussalam</span>
                    </h1>
                    <h4 className="text-lg text-white">
                        We are the female Indonesian Islamic Student Movement corps
                    </h4>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className=" pt-10"
                >
                    <Image
                        src="/banner.svg"
                        width={1000}
                        height={1000}
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
                className="absolute right-0 top-10 z-0 h-auto w-auto"
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
