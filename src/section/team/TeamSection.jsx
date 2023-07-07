import Breadcrumbs from "@/components/BreadCrumbs";
import TeamCard from "@/components/TeamCard";
import { getData } from "@/utils/getData";

export default async function TeamSection() {
    const data = await getData(
        "https://cdn.contentful.com/spaces/8unu6a33e8sw/entries?access_token=moeWKcoJw5flx43XWBL1WebDZYsujWSzumlqcmaCXNQ&content_type=team",
        { next: { revalidate: 10 } }
    );

    return (
        <section className="flex min-h-screen w-full flex-col gap-8 px-8 py-24 lg:px-24">
            <div className="">
                <Breadcrumbs activeSegment="Team" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-5">
                    <p className="font-medium text-gray-600">Struktur</p>
                    <div className="h-[2px] w-32 bg-tertiary" />
                </div>
                <h1 className="text-4xl font-bold text-primary">PMII Periode 2023 - 2024</h1>
            </div>
            <div className="grid h-full w-full grid-cols-1 gap-5  md:grid-cols-2 lg:gap-10 xl:grid-cols-4">
                {data?.items.map((item) => (
                    <TeamCard
                        key={item.sys.id}
                        name={item.fields.name}
                        position={item.fields.position}
                        assetsId={item.fields.profilePicture.sys.id}
                        facebook={item.fields.facebook}
                        instagram={item.fields.instagram}
                        linkedin={item.fields.linkedin}
                    />
                ))}
            </div>
        </section>
    );
}
