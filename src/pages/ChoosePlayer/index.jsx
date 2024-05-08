import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import styles from './style.module.scss';
import Wrapper from '../../components/Wrapper';
import ShapeX from '../../components/ShapeX';
import ShapeO from '../../components/ShapeO';
import BackCard from '../../components/BackCard';
import MainButton from '../../components/MainButton';

export default function ChoosePlayer() {
  const [x, setX] = useState(0);
  const [o, setO] = useState(0);

  const btnTitel = "Let’s play"
  const btnH = "80px"
  const btnW = "190px"

  const handleX = () => {
    if (x == 1) {
      setX(0)
      setO(0)
    } else {
      setX(1)
      setO(-1)
    }
  }
  const handleO = () => {
    if (o == 1) {
      setX(0)
      setO(0)
    } else {
      setX(-1)
      setO(1)
    }
  }

  let stX = x == 0 ? { height: "80px", width: "80px" } : x == 1 ? { height: "160px", width: "160px" } : { height: "80px", width: "80px", fill: '#9B9B9B' }
  let stO = o == 0 ? { height: "80px", width: "80px" } : o == 1 ? { height: "160px", width: "160px" } : { height: "80px", width: "80px", fill: '#9B9B9B' }
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton />
      </div>
      <div className={styles.headlineWrapper}>
        <div className={styles.elipse} />
        <span className={styles.text}>Choose Player</span>
      </div>

      <div className={styles.table}>
        <Wrapper>
          <div onClick={handleX} id="x">
            <BackCard height="150px" width="150px" color={x == -1 ? 'grey' : ''}>
              <div>
                <ShapeX {...stX} />
              </div>
            </BackCard>
          </div>
          <div onClick={handleO} id="o">
            <BackCard height="150px" width="150px" color={o == -1 ? 'grey' : ''}>
              <div>
                <ShapeO {...stO} />
              </div>
            </BackCard>
          </div>
        </Wrapper>
      </div >

      <div className={styles.btn}>
        <MainButton text={btnTitel} height={btnH} width={btnW} />
      </div>

    </div >
  );
}
