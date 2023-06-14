import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { headerConfig } from './Header.config'

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Link to='/'>
                <h1>{headerConfig.logoText}</h1>
              </Link>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.link} to='/'>{headerConfig.homeLink}</Link>
                <Link className={styles.link} to='create/new'>{headerConfig.postLink}</Link>
            </nav>
        </div>
    </header>
  )
}
