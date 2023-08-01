import styles from './finish.module.scss'
import BackgroundImg from '../../assets/images/cupcakes.jpeg'
import HappyImg from '../../assets/images/happy.png'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

const Finish = () => {
  return (
    <div className={styles.finish}>
      <div className={styles.bgImg}>
        <img src={BackgroundImg} alt="" />
      </div>
      <div className={styles.text}>
        <h1>Thank you for your purchase!</h1>
        <img src={HappyImg} alt="" />
        <div className={styles.link}>
          <Link to="../member/orders">
            <Button text={'Check Orders'} />
          </Link>
          <Link to="..">
            <Button text={'Continue Shopping'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Finish