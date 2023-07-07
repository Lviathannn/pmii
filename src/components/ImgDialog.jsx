"use client";
import React, { useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, Card } from "@material-tailwind/react";
import Image from "next/image";
import { saveAs } from "file-saver";

export default function ImgDialog({ imgLink, caption, index }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const saveFile = () => {
        saveAs(`https:${imgLink}`, `${caption}.jpg`);
    };
    return (
        <>
            <Card
                className="cursor-pointer overflow-hidden shadow-none transition-opacity"
                onClick={handleOpen}
            >
                <div
                    color="blue-gray"
                    className="relative h-[270px] w-[360px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-125 sm:h-[291px] sm:w-[388px]"
                >
                    <Image
                        src={`https:${imgLink}`}
                        alt={caption}
                        fill
                        className="object-cover "
                        priority={index < 3 ? true : false}
                    />
                </div>
            </Card>
            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between ">
                    <p className="text-lg font-semibold">{caption}</p>
                    <Button color="blue" size="md" className="border-none" onClick={saveFile}>
                        Download
                    </Button>
                </DialogHeader>
                <DialogBody divider={true} className="overflow-hidden rounded-b-lg p-0">
                    <Image
                        src={`https:${imgLink}`}
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
