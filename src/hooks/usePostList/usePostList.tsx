import { useState, useEffect } from "react";
import { IPost } from "../../interface";

export const usePostList = () => {
    const [postList, setPostList] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(()=> {
        setIsLoading(true)
        async function getPosts ():Promise<void> {
            const responce: Response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const json: IPost[] = await responce.json()
            setIsLoading(false)
            setPostList(json)
        }
        try {
            getPosts()
        } catch (err) {
            console.log(err)
            setError(true)
        }
        

    }, [])

    return {postList, isLoading, error}
}