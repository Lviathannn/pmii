import BreadCrumbs from "@/components/BreadCrumbs";
import { getData } from "@/utils/getData";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function BlogDetailSection({ slug }) {
    const data = await getData(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post&fields.slug=${slug}`
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-5 py-24 lg:px-24">
            <BreadCrumbs
                activeSegment="Blog"
                activeSegment2={{ title: data?.items[0]?.fields?.shortTitle, slug: slug }}
            />
            <Image
                src={`https:${data?.includes?.Asset[0]?.fields?.file?.url}`}
                alt={data?.items[0]?.fields?.title}
                width={1280}
                height={720}
                className=" h-60 w-full rounded-xl object-cover object-center sm:h-72 xl:h-[500px]"
                priority={true}
            />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-primary md:text-4xl">
                    {data?.items[0]?.fields?.title}
                </h1>
                <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:gap-5">
                    <div className="flex items-center gap-2">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-4 w-4 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            ></path>
                        </svg>
                        <p className="font-medium text-gray-600">
                            {data?.items[0]?.fields?.author}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-4 w-4 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <p className="font-medium text-gray-600">
                            {new Date(data?.items[0]?.fields?.date).toLocaleString("id-ID", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className="blog-detail">
                {documentToReactComponents(data?.items[0]?.fields?.content)}
            </div>
        </section>
    );
}
