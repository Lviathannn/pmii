"use client";
import { fetcher } from "@/utils/fetcher";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function Card({ title, author, imgId, slug }) {
    const imgData = useSWR(
        `https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/assets/${imgId}?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ`,
        fetcher
    );
    return (
        <Link href={`/blog/${slug}`}>
            <motion.article
                className=" flex min-h-full w-full flex-col items-center justify-start gap-5 rounded-xl p-5 font-poppins shadow-sm transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div color="blue-gray" className=" overflow-hidden rounded-lg">
                    <Image
                        src={`https:${imgData?.data?.fields?.file?.url}`}
                        alt={title}
                        width={1280}
                        height={720}
                        className="aspect-video object-cover"
                    />
                </div>
                <div>
                    <p className="font-medium text-gray-600">{author}</p>
                    <h5 className="mb-2 text-lg font-semibold text-gray-800">{title}</h5>
                </div>
            </motion.article>
        </Link>
    );
}
