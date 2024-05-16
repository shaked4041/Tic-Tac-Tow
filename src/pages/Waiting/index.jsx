import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import BackButton from '../../components/BackButton'
import Wrapper from '../../components/Wrapper'
import Spinner from '../../components/Spinner'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useSocket from '../../socket'

export default function Waiting() {
    const { roomNumber } = useParams();
    const [code, setCode] = useState('')
    const nav = useNavigate()
    const socket = useSocket();

    useEffect(() => {
        setCode(roomNumber);
        socket.on('connectPlayer2', (msg)=>{
            console.log(msg);
            nav('/choosePlayer')
        })
        // 
    }, [roomNumber]);

    const titel = "your code"

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
