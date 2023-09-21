import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    const newImageObject = async() => {
        const imagesObjects = await getGifs(category)
        setImages(imagesObjects)
        console.log(imagesObjects)
        setIsLoading(false)
    }
    useEffect(() => {
        newImageObject()
    }, []);


    return {
        images,
        isLoading
    }
}
