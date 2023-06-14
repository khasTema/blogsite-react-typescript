//@ts-nocheck
// import { usePostList } from "../../../hooks/usePostList/usePostList";
import { useParams } from "react-router";
import { IPost } from "../../../interface";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

export const usePost = () => {
    // const {postList} = usePostList()

    const postList = useSelector((state)=> state.postList.value)

    const {post} = useParams() 
    const [postToShow, setPostToShow] = useState<IPost>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        setPostToShow(postList.filter(item => item.id === Number(post))[0])
        setIsLoading(false)
    }, [post, postList])

    return {postToShow, isLoading}
}