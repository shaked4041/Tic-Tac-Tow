import React from 'react'
import styles from './style.module.scss'

export default function index({children}) {
  return (
    <div className={styles.avatar}>
      
        {children}
    </div>
  )
}
