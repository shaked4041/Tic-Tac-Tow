import React from 'react'
import styles from './style.module.scss'
import BackButton from '../../components/BackButton'
import Wrapper from '../../components/Wrapper'
import Spinner from '../../components/Spinner'

const code = 123456 //צריך לבוא קוד רנדומלי
const titel= "your code"
export default function
    () {
    return (
        <div className={styles.waiting}>
            <div className={styles.back}><BackButton /></div>
            <div className={styles.center}>
                
                    <Wrapper titel={'your code'}  >
                        <div className={styles.code} >
                            {code}
                        </div>
                    </Wrapper>
                <div className={styles.spinner}>
                    <Spinner />
                </div>
                <span className={styles.titel2}>waiting for opponent</span>
            </div>

        </div>
    )
}
