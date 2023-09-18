import { getData } from "@/utils/getData";
import DialogCard from "./DialogCard";

export default async function ImgDialog({ caption, imgId }) {
    const imgLink = await getData(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${imgId}?access_token=${process.env.ACCESS_TOKEN}`
    );

    return <DialogCard caption={caption} imgLink={imgLink?.fields?.file.url} />;
}
