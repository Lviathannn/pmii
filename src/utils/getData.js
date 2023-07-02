export async function getData(url) {
    const res = await fetch(url);

    return res.json();
}
