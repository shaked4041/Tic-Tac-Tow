import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import BackButton from '../../components/BackButton'
import MainButton from '../../components/MainButton'
import Wrapper from '../../components/Wrapper'
import { useNavigate } from 'react-router-dom';
import useSocket from '../../socket'

export default function JoinGame() {

    const [code, setCode] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const text1 = "join"
    const height1 = '60px'
    const width1 = '160px'

    const text2 = "create a game"
    const height2 = '70px'
    const width2 = '300px'

    const nav = useNavigate()
    const socket = useSocket();

    const handleInputChange = (e) => {
        setCode(e.target.value);
    };


    const handleJoinClick = () => {
        socket.emit("room", code)
        socket.on('connectPlayer2', (msg) => {
            console.log(msg)
            nav('/waitingJoin')
        })
    };

    useEffect(() => {
        socket.on('createGame', (roomNumber) => {
            console.log("Received room number:", roomNumber);
            setRoomNumber(roomNumber)
            nav(`/waiting/${roomNumber}`);
        });
    }, [socket])

    const createGame = () => {
        socket.emit('createGame');
    };

    return (
        <div className={styles.joinGame}>
            <div className={styles.back}><BackButton /></div>
            < div className={styles.center} >

                <div className={styles.fTitel}>
                    <div className={styles.elips}></div>
                    <span className={styles.titel}>join to a game</span>
                </div>
                <Wrapper>
                    <input
                        type="text"
                        className={styles.enterCode}
                        placeholder="enter code game"
                        value={code}
                        onChange={handleInputChange}
                    />
                </Wrapper>

                <div className={styles.btn1}>
                    <MainButton className={styles.btn1} text={text1} height={height1} width={width1} onClick={handleJoinClick} ></MainButton>
                </div>

                <div className={styles.or}>
                    <div className={styles.line}></div>
                    <span className={styles.titel}>or</span>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.btn1}>
                    <MainButton text={text2} height={height2} width={width2} onClick={createGame}></MainButton>
                </div>
            </div>

        </div>
    )
}
