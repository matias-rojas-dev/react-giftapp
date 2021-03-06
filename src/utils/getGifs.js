export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DcDNOvCPMWRDXs8lIEmWCI90aCHPITn4&q=${encodeURI(category)}=25&offset=0&rating=g&lang=en&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    return gifs;

}