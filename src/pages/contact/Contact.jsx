import styles from './contact.module.scss'
import BackeryImg from '../../assets/images/bakery.jpeg'
import Map from '../../assets/images/map.jpeg'
import { useEffect } from 'react'

const Contact = () => {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  return (
    <div className={styles.contact}>
      <div className={styles.bg}>
        <img src={BackeryImg} alt="" />
      </div>
      <div className={styles.info}>
        <h2>Contact Us</h2>
        <p>EMAIL: happyBakery@google.com</p>
        <p>TEL: 02-12345678</p>
        <p>
          ADDRESS: 1F., No. 10, Ln. 67, Smile 1st St., Happy Dist., Taipei City,
          Taiwan
        </p>
        <div className={styles.map}>
          <img src={Map} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
