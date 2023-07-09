import Breadcrumbs from "@/components/BreadCrumbs";
import PageTitle from "@/components/PageTitle";
import TeamCard from "@/components/TeamCard";
import { getData } from "@/utils/getData";

export default async function TeamSection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=team&order=-sys.createdAt",
        { next: { revalidate: 30 } }
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <PageTitle activeSegment="Team" />
            <div className="grid h-full w-full grid-cols-1 gap-5  md:grid-cols-2 lg:gap-10 xl:grid-cols-4">
                {data?.items.map((item, index) => (
                    <TeamCard
                        key={item.sys.id}
                        name={item.fields.name}
                        position={item.fields.position}
                        imgId={item?.fields?.profilePicture?.sys?.id}
                        facebook={item.fields.facebook}
                        instagram={item.fields.instagram}
                        linkedin={item.fields.linkedin}
                    />
                ))}
            </div>
        </section>
    );
}
