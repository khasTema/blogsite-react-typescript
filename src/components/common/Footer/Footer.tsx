import React from 'react'
import { footerConfig } from './Footer.config'
import styles from './Footer.module.css'


export const Footer: React.FC = ():JSX.Element => {
  return (
    <footer className={styles.footer}>
      {footerConfig.footerText}
    </footer>
  )
}

