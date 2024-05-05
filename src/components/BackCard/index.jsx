import React from 'react'
import styles from './style.module.scss'


export default function BackCard({ children, height, width }) {
  return (
    <div className={styles.container} style={{ height: height, width: width }}>
      {children}
    </div>
  )
}
