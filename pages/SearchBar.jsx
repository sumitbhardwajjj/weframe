import React from 'react'
import styles from "../styles/SearchBar.module.css"
import Header from './Header'
import Articles from './Articles'
import Stories from './Stories'

const SearchBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchBar}>
      <div className={styles.search} >
        <img src="vector-1.png" alt="" />
        <input type="text" placeholder='search' />
      </div>
      <div  className={styles.searchContainer} >
        <div>
        <img src="image-1.png" alt="" />
        </div>
        <div>
          <h5>Welcome back,</h5>
          <h3>Akshita Patel</h3>
        </div>
      </div>
    </div>
    <Header/>
    <Articles/>
    <Stories/>
    </nav>
  )
}

export default SearchBar
