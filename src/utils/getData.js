export async function getData(url, cache) {
    const res = await fetch(url, cache);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
