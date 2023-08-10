import styles from './adminProductDetail.module.scss'
import Button from '../../components/button/Button'
import { TextInput } from '../../components/input/Input'
import ProductImg from '../../assets/images/scone.jpeg'
import { adminMenu } from '../../data'
import { Image, SuccessCheck } from '../../assets/icons'

const UploadedCard = () => {
  return (
    <div className={styles.card}>
      <img alt="" src={ProductImg} />
      <div className={styles.filename}>
        <p>Product thumbnail.png</p>
        <div className={styles.line}></div>
      </div>
      <SuccessCheck />
    </div>
  )
}

const AdminAddProduct = () => {
  return (
    <div className={styles.adminProductDetail}>
      <div className={styles.title}>
        <h5>Product Details</h5>
        <div className={styles.text}>
          <p>Home ＞ All Products ＞ Add New Product</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.formWrapper}>
          <form>
            <div className={styles.name}>
              <label>Product Name</label>
              <TextInput type={'text'} placeholder={'Type Name Here'} />
            </div>
            <div className={styles.description}>
              <label>Description</label>
              <textarea placeholder="Type Description here"></textarea>
            </div>
            <div className={styles.category}>
              <label for="category">Category</label>
              <select id="category" name="category">
                <option value="" disabled selected>
                  Choose Category Here
                </option>
                {adminMenu.map((item) => (
                  <>
                    <option value={item.title} key={item.id}>
                      {item.title}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className={styles.sku}>
              <label>SKU</label>
              <TextInput type={'text'} placeholder={'Fox-3983'} />
            </div>
            <div className={styles.stock}>
              <label>Stock Quantity</label>
              <TextInput type={'number'} placeholder={1234} />
            </div>
            <div className={styles.price}>
              <label>Regular Price</label>
              <TextInput type={'text'} placeholder={'$1000'} />
            </div>
            <div className={styles.sale}>
              <label>Sale Price</label>
              <TextInput type={'text'} placeholder={'$450'} />
            </div>
          </form>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img src={ProductImg} alt="" />
            </div>
            <div className={styles.upload}>
              <h6>Product Gallery</h6>
              <div className={styles.content}>
                <Image />
                <div className={styles.text}>
                  <p>Drop your imager here, or browse</p>
                  <p>Jpeg, png are allowed</p>
                </div>
              </div>
              <div className={styles.cards}>
                <UploadedCard />
                <UploadedCard />
                <UploadedCard />
                <UploadedCard />
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <div className={styles.delete}>
                <Button text={'DELETE'} />
              </div>
              <div className={styles.cancel}>
                <Button text={'CANCEL'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProduct
