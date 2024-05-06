import React from 'react'
import styles from './style.module.scss'


export default function Wrapper({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
