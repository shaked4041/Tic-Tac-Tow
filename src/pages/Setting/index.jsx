import React from 'react'
import styles from './style.module.scss'
import Wrapper from '../../components/Wrapper'
import BackButton from '../../components/BackButton'
import SetButton from '../../components/SetButton'
import { useNavigate } from 'react-router-dom';

export default function index() {

    const nav = useNavigate()

    return (
        <div className={styles.setting}>
            <div className={styles.logo} >
                <div className={styles.elips}></div>
                <img className={styles.img} src={'https://s3-alpha-sig.figma.com/img/fe9f/5a78/620af74ff1676949d91804882a8c5bab?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS5GC~snUDt8LJ0~mUSAokSvquxFsxEG~hlK9BAiJ8XovERcbln38Xd1zOq-vOkHOe066z3Od1ZD-eOdiGBHXg5M9UbYX4CnFuO3BpLzRlY8mWw7eHAk2FYnVF43G3vhxZbWqxJlDq766VCWBMHC~K2FZK5~0vXBiEpyoPOjrfwXK0HOWsTXRGErCH8dkqmyYdYKFMB2GmqAbB93cywSoQ1uz9WEX4a8MmJOnGRAUz9QhKTJXGauuqP0~iCpDGcqxHtQDua9spyK0v75LVJtbm8W44T2ZfT94~PtsQog~YfoJy5rmHYWOpx5LiHaUKwbF2NcLFoEzlGd1igA16-buA__'} />
            </div>

            <Wrapper titel={'your name'} >
                <div className={styles.code} >
                </div>
            </Wrapper>
            <span className={styles.titel}>choose avatar</span>
            <img className={styles.img} src={'https://s3-alpha-sig.figma.com/img/6442/293d/7af8c45cc45fe0610d34960eb566b0c5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXFSZNcqBt8nr~DzXfP4c1sQSrYE7kcPuTmlWB1IW3ivxJpguBNaBVcB-a0cvE0ZEYjkdyuFFv11OcJkqruAAIXQJekcX4MN-BktXMUTurLcOiIn-dqJez4rgFxGBmQ3DnMl5cxjpp50WSg7UWriQhi2woDa1QROYUZARD7kdeoXKAEqHfZ4y-wrugn619lYujQR7UIehaHOffElb-6Lgz~kA9yh19Q72J0HDhe0~QpUYPSyEeQvn0l0XX55gWllGrfLuJ9~4fCefHuSNok2ROHrN-FVvtkMpi3jLSabeNBM3z6~q0TzvzJEz75f0P2dOo3whCCXQgjZf46cu9Ba7Q__'} />

            <div className={styles.btn}>
                <div className={styles.back}><BackButton /></div>
                <div className={styles.back}><SetButton icon={<svg width="137" height="115" viewBox="0 0 137 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.905 71.1867L114.65 2.44115L134.879 22.6695L66.1333 91.4148L44.9893 112.559L23.7005 91.2699L2.12132 69.6906L22.2045 49.6075L43.7837 71.1867L44.8443 72.2473L45.905 71.1867Z" fill="white" stroke="#B28100" stroke-width="3" />
                </svg>} onClick={()=> nav('/menu')} />
                </div>
            </div>
        </div>
    )
}
