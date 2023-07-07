import Card from "@/components/Card";
import { getData } from "@/utils/getData";
import React from "react";

export default async function NewsSection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=post",
        { next: { revalidate: 20 } }
    );

    return (
        <section className=" flex flex-col gap-10 px-8 py-20 lg:px-24">
            <div className="flex flex-col items-center justify-center leading-none">
                <h2 className=" text-center text-[40px] font-bold text-primary">News</h2>
                <p className="text-base  font-semibold text-secondary">Berita</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
                {data?.items?.map((item, index) => {
                    if (index < 3) {
                        return (
                            <Card
                                title={item?.fields?.title}
                                slug={item?.fields?.slug}
                                author={item?.fields?.author}
                                imgLink={data?.includes?.Asset[index]?.fields?.file?.url}
                                key={index}
                            />
                        );
                    } else {
                        return;
                    }
                })}
            </div>
        </section>
    );
}
