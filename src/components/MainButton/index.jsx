import React from 'react'
import styles from './style.module.scss'

export default function index({ text, height, width ,onClick}) {
  return (

        <button className={`${styles.btn}`} style={{ height, width }} onClick={onClick}>
       <span className={styles.text}>{text}</span>    
        </button>
  
  )
}
