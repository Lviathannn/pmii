import Breadcrumbs from "@/components/BreadCrumbs";
import ImageGallery from "@/components/ImgGallery";
import { getData } from "@/utils/getData";

export default async function GallerySection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=gallery"
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <div className="">
                <Breadcrumbs activeSegment="Gallery" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-5">
                    <p className="font-medium text-gray-600">Gallery</p>
                    <div className="h-[2px] w-32 bg-tertiary" />
                </div>
                <h1 className="text-4xl font-bold text-primary">PMII Periode 2023 - 2024</h1>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                {data?.items.map((item, index) => (
                    <ImageGallery
                        imgId={item?.fields?.image?.id}
                        key={index}
                        caption={item?.fields?.caption}
                        imgLink={data?.includes?.Asset[index]?.fields?.file?.url}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
