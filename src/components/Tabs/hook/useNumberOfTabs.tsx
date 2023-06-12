import { useMemo } from 'react'
import { usePostList } from '../../../hooks/usePostList/usePostList'
import { POSTS_PER_PAGE } from '../../../constants'

export const useNumberOfTabs = () => {

    const {postList} = usePostList()

    // calculating number of tabs depending on array of post length
    // taking in account that we want only 10 posts per page
    const numberOfTabs: number[] = useMemo(()=> 
                Array.from({ 

                    length: postList.length / POSTS_PER_PAGE 

                }, (_, index) => index + 1), [postList.length])

  
    return {numberOfTabs}
}


