import { usePostList } from '../../hooks/usePostList/usePostList'
import { PostCard } from '../../components/PostCard/PostCard'
import styles from './blogs.module.css'


export const Blogs: React.FC = (): JSX.Element => {

  const {postList, isLoading, error} = usePostList()


  if (error) {return <h1>Ooops, something wronng...</h1>}
  if (isLoading) { return <h1>Loading Post data...</h1> }

  return (
    <div className={styles.wrapper}>
      {postList.map(post => 
                        <PostCard 
                            key={post.id} 
                            userId={post.userId} 
                            title={post.title} 
                            body={post.body}
                        />
                    )
      }
    </div>
  )
}


