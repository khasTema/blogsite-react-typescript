import React from 'react'
import styles from './post.module.css'
import { usePost } from './hook/usePost'
import { Button } from '../../components/UI/Button'
import { postConfig } from './post.config'


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
      <Button linkTo='/' textBtn={postConfig.backLink}/>
    </article>
  )
}

