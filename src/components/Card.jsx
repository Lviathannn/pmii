import { getData } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Card({ title, author, imgId, slug }) {
    const imgData = await getData(
        `https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/assets/${imgId}?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ`,
        { next: { revalidate: 30 } }
    );

    return (
        <Link href={`/blog/${slug}`}>
            <article className=" flex w-full flex-col justify-center gap-5 rounded-xl p-5 font-poppins shadow-sm transition-all hover:shadow-lg">
                <div
                    color="blue-gray"
                    className="relative aspect-video  w-96 overflow-hidden rounded-lg md:w-80 lg:w-96 2xl:w-[360px]"
                >
                    <Image
                        src={`https:${imgData?.fields?.file?.url}`}
                        alt={imgData?.fields?.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="font-medium text-gray-600">{author}</p>
                    <h5 className="mb-2 text-lg font-semibold text-gray-800">{title}</h5>
                </div>
            </article>
        </Link>
    );
}
