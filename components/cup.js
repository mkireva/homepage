import React from 'react'
import styles from './cup.module.css'

const Cup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.plate}></div>
      <div className={styles.cup}>
        <div className={styles.top}>
          <div className={styles.vapour}>
            <span style={{ '--i': 1 }}></span>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 5 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 20 }}></span>
            <span style={{ '--i': 6 }}></span>
            <span style={{ '--i': 7 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 8 }}></span>
            <span style={{ '--i': 17 }}></span>
            <span style={{ '--i': 11 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 9 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 19 }}></span>
          </div>
          <div className={styles.circle}>
            <div className={styles.tea}></div>
          </div>
        </div>
        <div className={styles.handle}></div>
      </div>
    </div>
  )
}
export default Cup
