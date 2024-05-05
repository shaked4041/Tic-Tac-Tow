import React from 'react'
import styles from './style.module.scss'
import MainButton from '../../components/MainButton'
const text1 = "play solo"
const text2 = "play with a friend"
const height = '100px'
const width = '500px'
export default function index() {
  return (
    <div className={styles.menu}>
      <MainButton className={styles.btn1} text={text1} height={height} width={width} />
      <MainButton className={styles.btn2} text={text2} height={height} width={width} />
    </div>
  )
}
