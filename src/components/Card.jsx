import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import useSWR from "swr";

export default function Card({ title, author, bannerId }) {
    const { data } = useSWR(
        `https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/assets/${bannerId}?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ`,
        fetcher
    );
    return (
        <article className="mt-6 flex w-full flex-col gap-5 rounded-xl p-5 font-poppins shadow-sm transition-all hover:shadow-md">
            <div color="blue-gray" className="">
                <Image
                    src={`https:${data?.fields?.file?.url}`}
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
    );
}
