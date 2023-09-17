"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HomeTitle({ title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-5 md:items-center"
        >
            <h1 className="text-center text-3xl font-bold  leading-none text-white md:text-[45px] lg:text-[82px]">
                Selamat Datang Di <br />
                <span className="text-secondary">{title}</span>
            </h1>
            <h4 className="text-center text-lg text-white">{subtitle}</h4>
        </motion.div>
    );
}
