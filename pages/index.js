import { Inter } from 'next/font/google'
import Slidebar from './Slidebar'
import SearchBar from './SearchBar'
import styles from "../styles/Index.module.css"
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
      <Slidebar/>
      <SearchBar/>
    </div>
   
    </div>
  )
}
