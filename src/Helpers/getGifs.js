export const getGifs = async (categoria) =>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=wcqgsGl6esKap6m5auiZERLYlOtNCgH8&q=${encodeURI(categoria)}&limit=7"`;
    const resp= await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(
        ele => {
            return {
                id: ele.id,
                title: ele.title,
                url: ele.images.downsized.url
            }
        })

    return gifs;
}