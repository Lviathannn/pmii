export async function getData(url, cache) {
    const res = await fetch(url, { next: { revalidate: cache } });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
