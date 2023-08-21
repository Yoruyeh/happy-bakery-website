import styles from './about.module.scss'
import BackgroundImg1 from '../../assets/images/about-bg1.jpeg'
import BackgroundImg2 from '../../assets/images/about-bg2.jpeg'
import { useEffect } from 'react'


const About = () => {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  return (
    <div className={styles.about}>
      <div className={styles.bgImg1}>
        <div className={styles.image}>
          <img src={BackgroundImg1} alt="" />
        </div>
        <div className={styles.text}>
          <h1>Our Story</h1>
          <p>
            Cras auctor mollis cursus. Nulla facilisi. Curabitur vitae ipsum
            mattis, finibus lectus ac, vehicula nisi. Duis est nisl, auctor
            vitae placerat eu, vehicula quis ligula. Vestibulum mollis nisi
            arcu, vitae sagittis magna placerat a. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Nullam sit amet cursus risus.
          </p>
          <p>
            Vestibulum mollis nisi arcu, vitae sagittis magna placerat a. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam sit amet cursus risus.
          </p>
        </div>
      </div>
      <div className={styles.bgImg2}>
        <div className={styles.image}>
          <img src={BackgroundImg2} alt="" />
        </div>
        <div className={styles.text}>
          <h1>100% Natural & Healthy</h1>
          <p>
            Cras auctor mollis cursus. Nulla facilisi. Curabitur vitae ipsum
            mattis, finibus lectus ac, vehicula nisi. Duis est nisl, auctor
            vitae placerat eu, vehicula quis ligula. Vestibulum mollis nisi
            arcu, vitae sagittis magna placerat a. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Nullam sit amet cursus risus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
