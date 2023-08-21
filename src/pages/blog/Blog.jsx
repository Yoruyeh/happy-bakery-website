import styles from './blog.module.scss'
import BackgroundImg from '../../assets/images/breads.jpeg'
import { useEffect } from 'react'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.blog}>
      <div className={styles.bg}>
        <img src={BackgroundImg} alt="" />
      </div>
      <div className={styles.info}>
        <h1>Website Under Construction</h1>
        <h2>To Be Continued ...</h2>
      </div>
    </div>
  )
}

export default Blog
