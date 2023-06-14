import React from 'react'
import styles from './404.module.css'
import { Link } from 'react-router-dom'

export const NoRoute = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Ooops, wrong page...</h1>
      <Link to='/'>go back</Link>
    </div>
  )
}

