"use client";
import React, { useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, Card } from "@material-tailwind/react";
import Image from "next/image";
import { saveAs } from "file-saver";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { motion } from "framer-motion";

export default function ImgDialog({ imgId, index, caption }) {
    const imgData = useSWR(
        `https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/assets/${imgId}?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ`,
        fetcher
    );

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const saveFile = () => {
        saveAs(`https:${imgData?.data?.fields?.file?.url}`, `${caption}.jpg`);
    };

    return (
        <>
            <motion.Card
                className=" cursor-pointer overflow-hidden rounded-lg shadow-none transition-opacity"
                onClick={handleOpen}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 * index }}
            >
                <div
                    color="blue-gray"
                    className="relative h-[270px] w-[360px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-125 sm:h-[291px] sm:w-[388px]"
                >
                    <Image
                        src={`https:${imgData?.data?.fields?.file?.url}`}
                        alt={caption}
                        fill
                        className="object-cover "
                        priority={index < 3 ? true : false}
                    />
                </div>
            </motion.Card>
            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between ">
                    <p className="text-lg font-semibold">{caption}</p>
                    <Button color="blue" size="md" className="border-none" onClick={saveFile}>
                        Download
                    </Button>
                </DialogHeader>
                <DialogBody divider={true} className="overflow-hidden rounded-b-lg p-0">
                    <Image
                        src={`https:${imgData?.data?.fields?.file?.url}`}
                        alt={caption}
                        width={1280}
                        height={1280}
                        className="h-full w-full object-cover object-center "
                        priority={true}
                    />
                </DialogBody>
            </Dialog>
        </>
    );
}
