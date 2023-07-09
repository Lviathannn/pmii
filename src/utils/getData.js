export async function getData(url, cache) {
    const res = await fetch(url, cache);

    return res.json();
}
