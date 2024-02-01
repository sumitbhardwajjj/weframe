import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h3 className={styles.h3}>Hello Admin,</h3>
      <p className={styles.p}>This is what we got you for today.</p>
      <div className={styles.headerCards}>
        <div className={styles.header}>
            <div>
            <img src="vector.png" alt="" />
            </div>
            <div>
                <h3>Articles</h3>
                <p>4,950 New Updates</p>
            </div>
        </div>
        <div className={styles.header}>
            <div>
            <img src="vector.png" alt="" />
            </div>
            <div>
                <h3>Articles</h3>
                <p>4,950 New Updates</p>
            </div>
        </div>
        <div className={styles.header}>
            <div>
            <img src="vector.png" alt="" />
            </div>
            <div>
                <h3>Articles</h3>
                <p>4,950 New Updates</p>
            </div>
        </div>
        <div className={styles.header}>
            <div>
            <img src="vector.png" alt="" />
            </div>
            <div>
                <h3>Articles</h3>
                <p>4,950 New Updates</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
