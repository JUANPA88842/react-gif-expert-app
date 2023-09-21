export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DdnCi5PJJK1pCCmSHRB8R8SmOIpoCF5g&q=${category}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
    }))

    //console.log(gifs)
    return gifs
}