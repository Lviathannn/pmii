import { getData } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Card({ title, author, imgId, slug }) {
    const imgLink = await getData(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${imgId}?access_token=${process.env.ACCESS_TOKEN}`
    );

    return (
        <Link href={`/blog/${slug}`}>
            <article className=" flex min-h-full w-full flex-col items-center justify-start gap-5 rounded-xl p-4 font-poppins shadow-sm transition-all hover:shadow-lg">
                <div color="blue-gray" className=" overflow-hidden rounded-lg">
                    <Image
                        src={`https:${imgLink?.fields?.file?.url}`}
                        alt={title}
                        width={1280}
                        height={720}
                        className="aspect-video object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600">{author}</p>
                    <h5 className="mb-2  font-semibold text-gray-900">{title}</h5>
                </div>
            </article>
        </Link>
    );
}
