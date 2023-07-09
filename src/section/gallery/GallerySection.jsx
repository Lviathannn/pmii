import ImgDialog from "@/components/ImgDialog";
import PageTitle from "@/components/PageTitle";
import { getData } from "@/utils/getData";

export default async function GallerySection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=gallery",
        { next: { revalidate: 30 } }
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <PageTitle activeSegment="Gallery" />
            <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                {data?.items.map((item, index) => (
                    <ImgDialog
                        key={index}
                        caption={item?.fields?.caption}
                        imgId={item?.fields?.image?.sys?.id}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
