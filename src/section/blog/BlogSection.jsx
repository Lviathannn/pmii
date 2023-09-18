import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { getData } from "@/utils/getData";

export default async function BlogSection() {
    const data = await getData(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post&order=-fields.date`,
        { next: { revalidate: 30 } }
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <PageTitle activeSegment="Blog" />
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {data?.items?.map((item, index) => {
                    return (
                        <Card
                            title={item?.fields?.title}
                            slug={item?.fields?.slug}
                            author={item?.fields?.author}
                            imgId={item?.fields?.coverImage?.sys.id}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}
