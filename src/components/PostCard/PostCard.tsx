import React from 'react'
import { IPost } from '../../interface'
import styles from './PostCard.module.css'
import { postCardConfig } from './PostCard.config'
import { Button } from '../UI/Button'

export const PostCard: React.FC<IPost> = ({userId, title, body, id}):JSX.Element => {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.info}>
            <span className={styles.user}>{userId}</span>
            <Button linkTo={`/details/${id}`} textBtn={postCardConfig.moreLink}/>
        </div>
    </div>
  )
}
