
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar'

export default function Home() {
  return (

    <div className="page-container">
      <Toolbar/>
      
      <div className={styles.main}>

        <h1>Random News App</h1>

        <h3>Daily news to kill boredom</h3>
        
      </div>
    </div>
  )
}
