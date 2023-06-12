import React from 'react'
import { IPost } from '../../interface'
import styles from './PostCard.module.css'

export const PostCard: React.FC<IPost> = ({userId, title, body}):JSX.Element => {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.info}>
            <span className={styles.user}>{userId}</span>
        </div>
    </div>
  )
}
