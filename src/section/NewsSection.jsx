import Card from "@/components/Card";
import React from "react";

export default function NewsSection() {
    return (
        <section className=" flex flex-col gap-10 px-8 py-20 lg:px-24">
            <div className="flex flex-col items-center justify-center leading-none">
                <h2 className=" text-center text-[40px] font-bold text-primary">News</h2>
                <p className="text-base  font-semibold text-secondary">Berita</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}
