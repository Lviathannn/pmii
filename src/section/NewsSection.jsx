"use client";
import Card from "@/components/Card";
import { fetcher } from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";

export default function NewsSection() {
    const { data } = useSWR(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/entries/1a6SgPB1nywFQ9XjeJ7nR7?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ",
        fetcher
    );
    return (
        <section className=" flex flex-col gap-10 px-8 py-20 lg:px-24">
            <div className="flex flex-col items-center justify-center leading-none">
                <h2 className=" text-center text-[40px] font-bold text-primary">News</h2>
                <p className="text-base  font-semibold text-secondary">Berita</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
                <Card
                    title={data?.fields?.title}
                    author={data?.fields?.author}
                    bannerId={data?.fields?.bannerImage.sys.id}
                />
                <Card
                    title={data?.fields?.title}
                    author={data?.fields?.author}
                    bannerId={data?.fields?.bannerImage.sys.id}
                />
                <Card
                    title={data?.fields?.title}
                    author={data?.fields?.author}
                    bannerId={data?.fields?.bannerImage.sys.id}
                />
            </div>
        </section>
    );
}
