import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Wrapper from '../../components/Wrapper/index';
import BackCard from '../../components/BackCard/index';
import MainButton from '../../components/MainButton/index';
import ShapeX from '../../components/ShapeX/index';
import ShapeO from '../../components/ShapeO/index';
import { useNavigate } from 'react-router-dom';
import useSocket from '../../socket';


const BoardPlayers = () => {
    const amtOfCards = 9;
    const [clickedCells, setClickedCells] = useState(Array(amtOfCards).fill(null));
    const [isWin, setIsWin] = useState(null);
    const [bColor, setBColor] = useState(null);
    const [options] = useState([<ShapeX />, <ShapeO />]);
    const [winCombo, setWinCombo] = useState([]);
    const [currentTurn, setCurrentTurn] = useState('')
    const nav = useNavigate()
    const socket = useSocket();
    const isMyTurn = currentTurn === socket.id

    console.log({ id: socket.id });

    useEffect(() => {
        socket.on('move', (updatedArr, turn, winner) => {
            if (winner != null) {
                setIsWin(winner)
            }
            setClickedCells(updatedArr)
            setCurrentTurn(turn)
        })
        socket.emit('get-board')
        socket.on('get-board', (currentTurn) => setCurrentTurn(currentTurn))

    }, [socket])

    const handleClick = (index) => {
        console.log('Cell clicked:', index);
        if (isWin !== null) {
            return;
        }
        console.log('Valid move, emitting "move" event...');
        socket.emit('move', index);
    };

    useEffect(() => {
        if (isWin) {
            console.log(`${isWin} is the winner`);
            setBColor('#D1D1D1');
            updateCellBackground();
        }
    }, [isWin])



    const updateCellBackground = () => {
    };

    const renderGridItem = (index) => (
        <div onClick={() => handleClick(index)} key={index} className={styles.gridItem}>
            <BackCard width={'80px'} height={'80px'} color={clickedCells[index] ? null : bColor}>
                <div>
                    {clickedCells[index] === 'o' ? <ShapeO /> :
                        clickedCells[index] === 'x' ? <ShapeX /> : null}
                </div>
            </BackCard>
        </div>
    );

    const gridItems = clickedCells.map((_, index) => renderGridItem(index));

    return (
        <div className={styles.container}>
            <div className={styles.yellowBlock}></div>
            <div className={styles.wrapper}>
                <Wrapper>
                    <div className={styles.gridContainer} >
                        {gridItems}
                    </div>
                </Wrapper>
            </div>
            <div className={styles.button}>
                <MainButton width={'170px'} height={'70px'} text={'BACK'} onClick={() => nav('/menu')} />
            </div>
        </div>
    );
};

export default BoardPlayers;









// function checkWinner(index, gridSize, clickedCells) {
//     const rootOfGridSize = Math.sqrt(gridSize);
//     const row = Math.floor(index / rootOfGridSize);
//     const col = index % rootOfGridSize;
//     const cellValue = clickedCells[index];
//     let winCombo = [];

//     // Check row
//     winCombo = [];
//     for (let i = 0; i < rootOfGridSize; i++) {
//         const cellIndex = row * rootOfGridSize + i;
//         if (clickedCells[cellIndex] !== cellValue) {
//             break;
//         }
//         console.log({ cellIndex, cellValue, row, col });
//         winCombo.push(cellIndex);
//     }
//     if (winCombo.length === rootOfGridSize) {
//         console.log(1)
//         return winCombo;
//     }

//     // Check column
//     winCombo = [];
//     for (let i = 0; i < rootOfGridSize; i++) {
//         const cellIndex = i * rootOfGridSize + col;
//         if (clickedCells[cellIndex] !== cellValue) {
//             break;
//         }
//         winCombo.push(cellIndex);
//     }
//     if (winCombo.length === rootOfGridSize) {
//         console.log(2)
//         return winCombo;
//     }

//     if (row === col) {
//         winCombo = [];
//         for (let i = 0; i < rootOfGridSize; i++) {
//             const cellIndex = i * rootOfGridSize + i;
//             if (clickedCells[cellIndex] !== cellValue) {
//                 break;
//             }
//             winCombo.push(cellIndex);
//         }
//         if (winCombo.length === rootOfGridSize) {
//             console.log(3)
//             return winCombo;
//         }
//     }

//     if (row + col === rootOfGridSize - 1) {
//         winCombo = [];
//         for (let i = 0; i < rootOfGridSize; i++) {
//             const cellIndex = i * rootOfGridSize + (rootOfGridSize - 1 - i);
//             if (clickedCells[cellIndex] !== cellValue) {
//                 break;
//             }
//             winCombo.push(cellIndex);
//         }
//         if (winCombo.length === rootOfGridSize) {
//             console.log(4)
//             return winCombo;
//         }
//     }

//     return null;
// }
