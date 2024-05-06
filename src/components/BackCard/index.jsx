import React from 'react'
import styles from './style.module.scss'


export default function BackCard({ children, height, width, color }) {
  return (
    <div className={styles.container} style={{ height, width, backgroundColor: color }}>
      {children}
    </div>
  )
}
