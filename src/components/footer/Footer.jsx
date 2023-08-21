import styles from './footer.module.scss'
import { Facebook, Instagram, Logo, Tiktok, Twitter } from '../../assets/icons'
import Button from '../../components/button/Button'
import { TextInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { productMenu } from '../../data'
import { useProducts } from '../../context/ProductsContext'

const Footer = () => {
  const { handleNavItemClick } = useProducts()

  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.subscribe}>
          <h3>Join Happy Bakery Club & get 15% off</h3>
          <p>Sign up for free! Join the community.</p>
          <div className={styles.subscribeInput}>
            <TextInput type={'email'} placeholder={'Email Address'} />
            <Button text={'SUBMIT'} />
          </div>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
            We are the biggest hyperstore in the universe. <br />
            We got you all cover with our exclusive collections and latest
            drops.
          </p>
        </div>
        <div className={styles.categories}>
          <h5>Categories</h5>
          <ul className={styles.linkList}>
            {productMenu.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                onClick={() => {
                  if (item.title === 'New Drops') {
                    handleNavItemClick({ id: item.id, sort: 'date_desc' })
                    return
                  }
                  handleNavItemClick({ id: item.id })
                }}
              >
                <li className={styles.dropdownMenuItem}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.company}>
          <h5>Company</h5>
          <ul className={styles.linkList}>
            <Link to="about">
              <li className={styles.linkItem}>About</li>
            </Link>
            <Link to="contact">
              <li className={styles.linkItem}>Contact</li>
            </Link>
            <Link to="blog">
              <li className={styles.linkItem}>Blog</li>
            </Link>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h5>Follow Us</h5>
          <div className={styles.socialMediaIcons}>
            <Facebook />
            <Twitter />
            <Instagram />
            <Tiktok />
          </div>
        </div>
        <Link to="admin/login">
          <div className={styles.admin}>Admin Login</div>
        </Link>
        <div className={styles.rights}>Happy Bakery © All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer