import Image from "next/image";
import Link from "next/link";

export default function Card({ title, author, imgLink, slug }) {
    return (
        <Link href={`/blog/${slug}`}>
            <article className=" flex w-full flex-col gap-5 rounded-xl p-5 font-poppins shadow-sm transition-all hover:shadow-lg">
                <div color="blue-gray" className="">
                    <Image
                        src={`https:${imgLink}`}
                        alt={"banner"}
                        width={400}
                        height={500}
                        className="aspect-video h-full w-full rounded-lg bg-cover"
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
