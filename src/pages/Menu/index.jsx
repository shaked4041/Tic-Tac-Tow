import React from 'react'
import styles from './style.module.scss'
import MainButton from '../../components/MainButton'
const text1 = "play solo"
const text2 = "play with a friend"
const height = '70px'
const width = '300px'
export default function index() {
  return (
    <div className={styles.menu}>

      <div className={styles.logo} >
      <div className={styles.elips}></div>
      <img className={styles.img} src={'https://s3-alpha-sig.figma.com/img/fe9f/5a78/620af74ff1676949d91804882a8c5bab?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS5GC~snUDt8LJ0~mUSAokSvquxFsxEG~hlK9BAiJ8XovERcbln38Xd1zOq-vOkHOe066z3Od1ZD-eOdiGBHXg5M9UbYX4CnFuO3BpLzRlY8mWw7eHAk2FYnVF43G3vhxZbWqxJlDq766VCWBMHC~K2FZK5~0vXBiEpyoPOjrfwXK0HOWsTXRGErCH8dkqmyYdYKFMB2GmqAbB93cywSoQ1uz9WEX4a8MmJOnGRAUz9QhKTJXGauuqP0~iCpDGcqxHtQDua9spyK0v75LVJtbm8W44T2ZfT94~PtsQog~YfoJy5rmHYWOpx5LiHaUKwbF2NcLFoEzlGd1igA16-buA__'} />
      </div>

      <MainButton className={styles.btn1} text={text1} height={height} width={width} />
      <MainButton className={styles.btn2} text={text2} height={height} width={width} />
    </div>
  )
}
