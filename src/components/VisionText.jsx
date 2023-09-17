"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function VisionText({ title, mission, vission }) {
    return (
        <motion.article
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="mb-5 text-3xl font-bold text-primary">{title}</h3>
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
                    <p className="max-w-3xl text-gray-600">{mission}</p>
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
                    <p className="max-w-3xl text-gray-600">{vission}</p>
                </div>
            </div>
        </motion.article>
    );
}
