import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import Popup from 'reactjs-popup';
import Aboutme from './components/Aboutme';
import Why from './components/Why';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sovtech Challenge</title>
        <meta name="description" content="Single react static page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.nav}>

        <Link href="/" className={styles.logo}>SovTech Challenge</Link>

        <ul className={styles.list}>

          <li className={styles.listItem}>
            <Link href="#">Email: j.dinizulu@gmail.com</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="https://www.linkedin.com/in/jabulane-dinizulu-a5a650143/">
            <Image src="/Linkedin_logo_initials.png" width="60" height="45"/>
            </Link>
          </li>
          
        </ul>

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
