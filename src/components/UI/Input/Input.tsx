import React from 'react'
import styles from './Input.module.css'
import { IinputProps } from './interface'

export const Input:React.FC<IinputProps> = ({placeholder, name, value, handlerChangeFunc}):JSX.Element => {
  return (
    <input 
        className={styles.input}
        type="text" 
        placeholder={placeholder} 
        name={name}
        value={value} 
        onChange={(e)=> handlerChangeFunc(e)} 
    />
  )
}

