"use client";

import { motion } from "framer-motion";
import BreadCrumbs from "./BreadCrumbs";

export default function PageTitle({ activeSegment, activeSegment2 }) {
    return (
        <>
            <motion.div
                className=""
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
            >
                <BreadCrumbs activeSegment={activeSegment} activeSegment2={activeSegment2} />
            </motion.div>
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3 }}
            >
                <div className="flex items-center gap-5">
                    <p className="font-medium text-gray-600">{activeSegment}</p>
                    <div className="h-[2px] w-32 bg-tertiary" />
                </div>
                <h1 className="text-4xl font-bold text-primary">PMII Periode 2023 - 2024</h1>
            </motion.div>
        </>
    );
}
