import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1>Daily news to kill boredom</h1>
      </div>
    </div>
  )
}
