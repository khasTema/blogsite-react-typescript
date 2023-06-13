import React from 'react'
import styles from './post.module.css'
import { usePost } from './hook/usePost'
import { Link } from 'react-router-dom'

export const Post:React.FC = ():JSX.Element => {

  const {postToShow, isLoading} = usePost()

  if (isLoading) {return <h1>Loading...</h1>}

  return (
    <article className={styles.wrapper}>
      <h1>{postToShow?.title}</h1>
      <p>{postToShow?.body}</p>
      <p>{postToShow?.body}</p>
      <p>{postToShow?.body}</p>
      <p>{postToShow?.body}</p>
      <p>{postToShow?.body}</p>
      <p>{postToShow?.body}</p>
      <span> Author: {postToShow?.userId}</span>
      <Link to='/' className={styles.back}>Back to all posts</Link>
    </article>
  )
}

