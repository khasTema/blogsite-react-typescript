import { usePostList } from '../../hooks/usePostList'
import { useRenderList } from '../../hooks/useRenderList'
import { PostCard } from '../../components/PostCard/PostCard'
import { Tabs } from '../../components/Tabs'
import styles from './blogs.module.css'

export const Blogs: React.FC = (): JSX.Element => {

  const {isLoading, error} = usePostList()
  const {renderPosts} = useRenderList()


  if (error) {return <h1>Ooops, something wronng...</h1>}
  if (isLoading) { return <h1>Loading Post data...</h1> }

  
  return (
    <>
      <div className={styles.wrapper}>
        {renderPosts.map(post => 
                          <PostCard 
                              key={post.id}
                              id={post.id} 
                              userId={post.userId} 
                              title={post.title} 
                              body={post.body}
                          />
                      )
        }
      </div>
      <Tabs/>
    </>
  )
}


