import Breadcrumbs from "@/components/BreadCrumbs";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImgGallery";
import { getData } from "@/utils/getData";

export default async function BlogSection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=post",
        { next: { revalidate: 20 } }
    );
    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <div className="">
                <Breadcrumbs activeSegment="Blog" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-5">
                    <p className="font-medium text-gray-600">Blog</p>
                    <div className="h-[2px] w-32 bg-tertiary" />
                </div>
                <h1 className="text-4xl font-bold text-primary">Berita Terkini</h1>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
                {data?.items?.map((item, index) => {
                    return (
                        <Card
                            title={item?.fields?.title}
                            slug={item?.fields?.slug}
                            author={item?.fields?.author}
                            imgLink={data?.includes?.Asset[index]?.fields?.file?.url}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}
