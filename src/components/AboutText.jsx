"use client";
import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function AboutText({ title, children }) {
    return (
        <motion.article
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="mb-5 text-3xl font-bold text-primary">{title}</h3>
            <p className="max-w-3xl text-base  leading-relaxed text-gray-600">{children}</p>
            <div className="">
                <Button
                    text="Explore"
                    target="visi"
                    icon={<PaperAirplaneIcon className="h-5 w-5 text-white " />}
                />
            </div>
        </motion.article>
    );
}
