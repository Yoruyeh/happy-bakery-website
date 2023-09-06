import styles from './adminProductDetail.module.scss'
import Button from '../../components/button/Button'
import { TextInput } from '../../components/input/Input'
import ProductImg from '../../assets/images/scone.jpeg'
import { BaseAdminMenu } from '../../data'
import { SuccessCheck } from '../../assets/icons'
import { useRef } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { AdminUploadFile, AdminAddNewProduct, AdminGetProducts } from '../../api/admin.products'
import { Cross } from '../../assets/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useAdminProducts } from '../../context/AdminProductsContext'
import ImageDropZone from '../../components/ImageDropZone/ImageDropZone'

const UploadedCard = ({ image, handleDeleteUpload }) => {
  return (
    <div className={styles.card}>
      <div className={styles.danger} onClick={() => handleDeleteUpload(image.url)}>
        <Cross />
      </div>
      <img alt="" src={image.url} />
      <div className={styles.filename}>
        <p>{image.file.name}</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.success}>
        <SuccessCheck />
      </div>
    </div>
  )
}

const AdminAddProduct = () => {
  let { category } = useParams()
  const navigate = useNavigate()
  const {
    setAdminProducts,
    setAdminProductCount,
    activePage,
    selectedCategoryId
   } = useAdminProducts()
  const [uploadImages, setUploadImages] = useState([])
  const [imageFormData, setImageFormData] = useState(null)
  const dropImageRef = useRef(null)
  const formDataRef = useRef(new FormData())
  const [newProductInfo, setNewProductInfo] = useState({
    name: '',
    description: '',
    category: category === 'all_products' ? '' : category,
    cover: '',
    sku: '',
    quantity: '',
    priceRegular: '',
    priceSale: ''
  })
  const totalImageQty = !uploadImages ? 0 : uploadImages.length

  const ProductPageTitle = (category) => {
    if (category === 'all_products') {
      return 'All Products'
    }
    return category
  }
  
  const handleNewProductInputChange = (event) => {
    const { name, value } = event.target
     if (
       name === 'sku' ||
       name === 'quantity' ||
       name === 'priceRegular' ||
       name === 'priceSale'
     ) {
       setNewProductInfo((prev) => ({
         ...prev,
         [name]: Number(value)
       }))
     } else {
      setNewProductInfo((prev) => ({
        ...prev,
        [name]: value
      }))
     }   
  }

  const handleUploadImage = () => {
    // 數量抵達四張時不能再新增
    if (totalImageQty >= 4) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Maximum upload is 4',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    dropImageRef.current.click()
  }

  const handleImageChange = (e) => {
    // 可上傳多張或一張
    const files = Array.from(e.target.files)
    const totalUploadQty = files.length + totalImageQty
    if (totalUploadQty > 4) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Maximum upload is 4',
        showConfirmButton: false,
        timer: 1500
      })
      const imagesToRemove = totalUploadQty - 4
      files.splice(4 - totalImageQty, imagesToRemove)
    }
    files.forEach((file) => {
      const imageURL = URL.createObjectURL(file)
      setUploadImages((prev) => [...prev, { file, url: imageURL }])
       formDataRef.current.append('image', file)
    })
    setImageFormData(formDataRef.current)
  }

  const handleDeleteUpload = (url) => {
    const updatedArray = uploadImages.filter(item => item.url !== url)
    setUploadImages(updatedArray)
  }

  const handleSaveClick = async () => {
    const {
      name,
      description,
      category,
      sku,
      quantity,
      priceRegular,
      priceSale
    } = newProductInfo
  
    if (
      !name.trim() ||
      !description.trim() ||
      !category ||
      !sku ||
      !priceRegular ||
      !priceSale
    ) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (!quantity && quantity !== 0) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (uploadImages.length < 4) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Upload 4 Images',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    
    if (uploadImages.length === 4) {
      // 顯示上傳中的提示框
      Swal.fire({
        title: 'Uploading Files...Please Wait...',
        timerProgressBar: true,
        allowOutsideClick: false, // 防止用戶在上傳期間點擊外部關閉
        didOpen: () => {
          Swal.showLoading()
        }
      })

      try {
        const { status, image } = await AdminUploadFile(imageFormData)

        if (status === 'success') {
          const realImageUrlTemp = image.slice(1)
          const newProductInfoTemp = {
            ...newProductInfo,
            cover: image[0].link
          }

          const { status: addStatus, message, newProduct } = await AdminAddNewProduct({
            productInfo: newProductInfoTemp,
            productImage: realImageUrlTemp
          })

          if (addStatus === 'success') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: `Successfully Add ${newProduct.name}`,
              showConfirmButton: false,
              timer: 1500
            })
            const { products, productCount } = await AdminGetProducts({
              id: selectedCategoryId,
              page: activePage
            })
            setAdminProducts(products)
            setAdminProductCount(productCount)
            navigate(-1)
            return
          }

          Swal.fire({
            position: 'top',
            icon: 'error',
            title: `${message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed!',
          text: 'Please try again.',
          showConfirmButton: true
        })
      }
    }
  }


  return (
    <div className={styles.adminProductDetail}>
      <div className={styles.title}>
        <h5>Product Details</h5>
        <div className={styles.text}>
          <p>Home ＞ {ProductPageTitle(category)} ＞ Add New Product</p>
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
                onChange={(e) => handleNewProductInputChange(e)}
              />
            </div>
            <div className={styles.description}>
              <label>Description</label>
              <textarea
                placeholder="Type Description here"
                name={'description'}
                onChange={(e) => handleNewProductInputChange(e)}
              ></textarea>
            </div>
            <div className={styles.category}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                defaultValue={newProductInfo.category}
                onChange={(e) => handleNewProductInputChange(e)}
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
                placeholder={'3983'}
                name={'sku'}
                onChange={(e) => handleNewProductInputChange(e)}
              />
            </div>
            <div className={styles.stock}>
              <label>Stock Quantity</label>
              <TextInput
                type={'number'}
                placeholder={1234}
                name={'quantity'}
                onChange={(e) => handleNewProductInputChange(e)}
              />
            </div>
            <div className={styles.price}>
              <label>Regular Price</label>
              <TextInput
                type={'number'}
                placeholder={'$1000'}
                name={'priceRegular'}
                onChange={(e) => handleNewProductInputChange(e)}
              />
            </div>
            <div className={styles.sale}>
              <label>Sale Price</label>
              <TextInput
                type={'number'}
                placeholder={'$450'}
                name={'priceSale'}
                onChange={(e) => handleNewProductInputChange(e)}
              />
            </div>
          </form>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img
                src={uploadImages.length > 0 ? uploadImages[0].url : ProductImg}
                alt=""
              />
            </div>
            <div className={styles.upload}>
              <h6>Product Gallery</h6>
              <ImageDropZone
                dropImageRef={dropImageRef}
                handleUploadImage={handleUploadImage}
                handleImageChange={handleImageChange}
                uploadImages={uploadImages}
                setUploadImages={setUploadImages}
                formDataRef={formDataRef}
                setImageFormData={setImageFormData}
                totalImageQty={totalImageQty}
              />
              {/* <div
                className={styles.dropZone}
                onClick={() => handleUploadImage()}
                onDragEnter={() => handleDragEnter()}
              >
                <input
                  type="file"
                  multiple
                  id="drop-image"
                  accept="image/*"
                  style={{ display: 'none' }}
                  name="drop-image"
                  ref={dropImageRef}
                  onChange={(e) => handleImageChange(e)}
                />
                <Image />
                <div className={styles.text}>
                  <p>Drop your imager here, or browse</p>
                  <p>Jpeg, png are allowed</p>
                </div>
              </div> */}
              <div className={styles.cards}>
                {uploadImages.map((image) => (
                  <UploadedCard
                    image={image}
                    key={image.url}
                    handleDeleteUpload={(url) => handleDeleteUpload(url)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <div className={styles.update} onClick={() => handleSaveClick()}>
                <Button text={'SAVE'} />
              </div>
              <div className={styles.cancel}>
                <Button text={'CANCEL'} onClick={() => navigate(-1)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProduct
