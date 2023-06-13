import React from 'react'
import { IPost } from '../../interface'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'
import { postCardConfig } from './PostCard.config'

export const PostCard: React.FC<IPost> = ({userId, title, body, id}):JSX.Element => {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.info}>
            <span className={styles.user}>{userId}</span>
            <Link to={`/details/${id}`} className={styles.more}>{postCardConfig.moreLink}</Link>
        </div>
    </div>
  )
}
