import { getData } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

export default async function TeamCard({ imgId, name, position, facebook, instagram, linkedin }) {
    const imgData = await getData(
        `https://cdn.contentful.com/spaces/8unu6a33e8sw/environments/master/assets/${imgId}?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ`,
        { next: { revalidate: 30 } }
    );
    return (
        <article className="mt-6 flex flex-col gap-5 rounded-xl p-5 font-poppins shadow-md transition-all">
            <div color="blue-gray" className="">
                <Image
                    src={`https:${imgData?.fields?.file?.url}`}
                    alt={imgData?.fields?.title}
                    priority={false}
                    width={300}
                    height={300}
                    className="aspect-square h-full w-full rounded-lg"
                />
            </div>
            <div>
                <h5 className="mb-2 text-center text-lg font-semibold text-gray-800">{name}</h5>
                <p className="text-center text-sm font-medium text-tertiary">{position}</p>
            </div>
            <div className="flex justify-center gap-4 pb-2 text-blue-gray-900">
                <Link
                    href={facebook}
                    className="text-gray-800 opacity-100 transition-opacity hover:text-secondary"
                >
                    <Image
                        src="/facebook.svg"
                        alt="Facebook-Icon"
                        width={35}
                        height={35}
                        className="h-6 w-6 transition-transform hover:scale-125"
                    />
                </Link>
                <Link
                    href={instagram}
                    className="text-gray-800 opacity-80 transition-opacity hover:text-secondary"
                >
                    <Image
                        src="/instagram.svg"
                        alt="Instagram-Icon"
                        width={35}
                        height={35}
                        className="h-6 w-6 transition-transform hover:scale-125"
                    />
                </Link>
                <Link
                    href={linkedin}
                    className="text-gray-800 opacity-80 transition-opacity hover:text-secondary"
                >
                    <Image
                        src="/lingkedin.svg"
                        alt="Lingkedin-Icon"
                        width={35}
                        height={35}
                        className="h-6 w-6 transition-transform hover:scale-125"
                    />
                </Link>
            </div>
        </article>
    );
}
