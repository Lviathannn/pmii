"use client";
import Image from "next/image";

export default function ImageGallery({ caption, imgLink, index }) {
    return (
        <div
            color="blue-gray"
            className="relative h-[270px] w-[360px] overflow-hidden rounded-lg sm:h-[291px] sm:w-[388px]"
        >
            <Image
                src={`https:${imgLink}`}
                alt={caption}
                fill
                className="h-[270px] w-[360px] object-cover sm:h-[291px] sm:w-[388px]"
                priority={index < 3 ? true : false}
            />
        </div>
    );
}
