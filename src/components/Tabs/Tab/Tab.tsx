import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Tab.module.css'

interface IPropTab {
    item: number;
}

export const Tab: React.FC<IPropTab> = ({item}):JSX.Element => {
  return (
    <Link className={styles.tab} to={`list/${item}`}>{item}</Link>
  )
}
