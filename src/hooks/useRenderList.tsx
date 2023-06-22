//@ts-nocheck
import { POSTS_PER_PAGE } from '../constants'
import { IPost } from '../interface'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'


export const useRenderList = () => {


    const postList = useSelector((state)=> state.postList.value)

    const {tab} = useParams()

    const lastPost: number = tab ? POSTS_PER_PAGE * Number(tab) : POSTS_PER_PAGE;
    const firtsPost: number = tab ? lastPost - POSTS_PER_PAGE : 0;

    const renderPosts: IPost[] = postList.slice(firtsPost, lastPost)

    return {renderPosts}
    
}

