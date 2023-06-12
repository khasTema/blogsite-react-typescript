import { usePostList } from '../../../hooks/usePostList/usePostList'
import { POSTS_PER_PAGE } from '../../../constants'
import { IPost } from '../../../interface'
import { useParams } from 'react-router'


export const useRenderList = () => {

    const {postList} = usePostList()
    const {tab} = useParams()

    const lastPost: number = tab ? POSTS_PER_PAGE * Number(tab) : POSTS_PER_PAGE;
    const firtsPost: number = tab ? lastPost - POSTS_PER_PAGE : 0;
    const renderPosts: IPost[] = postList.slice(firtsPost, lastPost)

    return {renderPosts}
    
}

