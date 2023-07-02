import Image from "next/image";

export default function Card() {
    return (
        <article className="mt-6 flex flex-col gap-5 rounded-xl p-5 font-poppins shadow-sm transition-all hover:shadow-md">
            <div color="blue-gray" className="">
                <Image
                    src="/news.webp"
                    alt="img-blur-shadow"
                    width={500}
                    height={450}
                    className="aspect-video rounded-lg bg-cover"
                />
            </div>
            <div>
                <p className="font-medium text-gray-600">Author</p>
                <h5 className="mb-2 text-lg font-semibold text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h5>
            </div>
        </article>
    );
}
