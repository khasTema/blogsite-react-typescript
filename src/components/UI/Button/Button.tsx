import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
import { IButton } from './interface'

export const Button:React.FC<IButton> = ({linkTo, textBtn}):JSX.Element => {
  return (
    <Link to={linkTo} className={styles.button}>{textBtn}</Link>
  )
}


