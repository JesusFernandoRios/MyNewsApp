import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1>Random News App</h1>
        <h3>Daily news to kill boredom</h3>
        
      </div>
    </div>
  )
}
