import React from 'react'
import styles from './style.module.scss'

export default function index({ text, height, width }) {
  return (

        <button className={`${styles.btn}`} style={{ height, width }} >
          {text} 
        </button>
  
  )
}
