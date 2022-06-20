import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Popup from 'reactjs-popup';
import Aboutme from './components/Aboutme';
import Why from './components/Why';
import Navigation from '../mycomponents/Navigation';
import Footer from '../mycomponents/Footer';


export default function Home() {

  return (
    <div className={styles.container}>

      <div className={styles.nav}>

      </div>

      <div className={styles.card}>

        <h1 className={styles.tittle}>
         Welcom To J Dinizulu Mini-Profile
        </h1>

        <div className={styles.tittle}>
          <Image src="/profpic.png" width="200" height="200"/>
        </div>

        <p className={styles.parag}>
          <Aboutme/>
        </p>

      </div>
      <div className={styles.position}>

        <Popup trigger={<button className="btn">Click To View</button>} position="top center">

        <div className={styles.pop}>

          <h1 className={styles.tittle}>Why SovTech ?</h1>

          <p className={styles.paraW}><Why/></p>

        </div>
        </Popup>
      </div>

      <footer className= {styles.bottom}>

          <p>All rights reserved &copy; 2022</p>

      </footer>

    </div>
  )
}
