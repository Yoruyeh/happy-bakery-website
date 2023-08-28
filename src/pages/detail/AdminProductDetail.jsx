import styles from './adminProductDetail.module.scss'
import Button from '../../components/button/Button'
import { TextInput } from '../../components/input/Input'
import { BaseAdminMenu } from '../../data'
import { Image, SuccessCheck } from '../../assets/icons'
import { useAdmin } from '../../context/AdminContext'
import { Cross } from '../../assets/icons'
import { useState } from 'react'

const UploadedCard = ({ image, handleDeleteUpload }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.danger}
        onClick={() => handleDeleteUpload(image.image_path)}
      >
        <Cross />
      </div>
      <img alt="" src={image.image_path} />
      <div className={styles.filename}>
        <p>{image.name}</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.success}>
        <SuccessCheck />
      </div>
    </div>
  )
}


const AdminProductDetail = () => {
  const { adminProduct } = useAdmin()
  const [uploadImages, setUploadImages] = useState(adminProduct.ProductImages)

  const handleDeleteUpload = (url) => {
    const updatedArray = uploadImages.filter(
      (item) => item.image_path !== url
    )
    setUploadImages(updatedArray)
  }

  return (
    <div className={styles.adminProductDetail}>
      <div className={styles.title}>
        <h5>Product Details</h5>
        <div className={styles.text}>
          <p>Home ＞ All Products ＞ Product Details</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.formWrapper}>
          <form>
            <div className={styles.name}>
              <label>Product Name</label>
              <TextInput
                type={'text'}
                placeholder={'Type Name Here'}
                name={'name'}
                defaultValue={adminProduct.name}
              />
            </div>
            <div className={styles.description}>
              <label>Description</label>
              <textarea
                placeholder="Type Description here"
                name={'description'}
                defaultValue={adminProduct.description}
              ></textarea>
            </div>
            <div className={styles.category}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                defaultValue={adminProduct.Category.name}
              >
                <option value="" disabled>
                  Choose Category Here
                </option>
                {BaseAdminMenu.map((item) => (
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
              <TextInput
                type={'number'}
                placeholder={3983}
                name={'sku'}
                defaultValue={adminProduct.sku}
              />
            </div>
            <div className={styles.stock}>
              <label>Stock Quantity</label>
              <TextInput
                type={'number'}
                placeholder={1234}
                name={'quantity'}
                defaultValue={adminProduct.stock_quantity}
              />
            </div>
            <div className={styles.price}>
              <label>Regular Price</label>
              <TextInput
                type={'number'}
                placeholder={'$1000'}
                name={'priceRegular'}
                defaultValue={adminProduct.price_regular}
              />
            </div>
            <div className={styles.sale}>
              <label>Sale Price</label>
              <TextInput
                type={'number'}
                placeholder={'$450'}
                name={'priceSale'}
                defaultValue={adminProduct.price_sale}
              />
            </div>
          </form>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img src={adminProduct.cover} alt="" />
            </div>
            <div className={styles.upload}>
              <h6>Product Gallery</h6>
              <div className={styles.dropZone}>
                <Image />
                <div className={styles.text}>
                  <p>Drop your imager here, or browse</p>
                  <p>Jpeg, png are allowed</p>
                </div>
              </div>
              <div className={styles.cards}>
                {uploadImages &&
                  uploadImages.length > 0 &&
                  uploadImages.map((image) => (
                    <UploadedCard
                      image={image}
                      key={image.image_path}
                      handleDeleteUpload={(url) => handleDeleteUpload(url)}
                    />
                  ))}
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <div className={styles.update}>
                <Button text={'UPDATE'} />
              </div>
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

export default AdminProductDetail
