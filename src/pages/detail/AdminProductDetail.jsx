import styles from './adminProductDetail.module.scss'
import Button from '../../components/button/Button'
import { TextInput } from '../../components/input/Input'
import { BaseAdminMenu } from '../../data'
import { Image, SuccessCheck } from '../../assets/icons'
import { Cross } from '../../assets/icons'
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { AdminUploadFile, AdminModifyProduct, AdminGetProducts } from '../../api/admin.products'
import { useNavigate, useParams } from 'react-router-dom'
import { useAdminProducts } from '../../context/AdminProductsContext'

const UploadedCard = ({ image, handleDeleteUpload }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.danger}
        onClick={() => handleDeleteUpload(image.image_path || image.url)}
      >
        <Cross />
      </div>
      <img alt="" src={image.image_path || image.url} />
      <div className={styles.filename}>
        <p>{image.name || image.file.name}</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.success}>
        <SuccessCheck />
      </div>
    </div>
  )
}


const AdminProductDetail = () => {
  let { params } = useParams()
  const navigate = useNavigate()
  const { adminProduct, setAdminProducts, handleProductDelete, activePage } = useAdminProducts()
  const [editProductInfo, setEditProductInfo] = useState({
    name: adminProduct.name || '',
    description: adminProduct.description || '',
    category: adminProduct.Category.name || '',
    cover: adminProduct.cover || '',
    sku: adminProduct.sku || '',
    quantity: adminProduct.stock_quantity || '',
    priceRegular: adminProduct.price_regular || '',
    priceSale: adminProduct.price_sale || ''
  })
  const [editImages, setEditImages] = useState(adminProduct.ProductImages)
  const [uploadImages, setUploadImages] = useState([])
  const dropImageRef = useRef(null)
  const formDataRef = useRef(new FormData())
  const [imageFormData, setImageFormData] = useState(null)
  const totalImageQty = !editProductInfo.cover ? 0 : 1 + editImages.length + uploadImages.length

  const ProductPageTitle = (category) => {
    if (category === 'all_products') {
      return 'All Products'
    }
    return category
  }

  const handleEditProductInputChange = (event) => {
    const { name, value } = event.target
    if (
      name === 'sku' ||
      name === 'quantity' ||
      name === 'priceRegular' ||
      name === 'priceSale'
    ) {
      setEditProductInfo((prev) => ({
        ...prev,
        [name]: Number(value)
      }))
    } else {
      setEditProductInfo((prev) => ({
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
    const totalUploadQty = totalImageQty + files.length
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
    files.forEach((file, index) => {
      const imageURL = URL.createObjectURL(file)
      if (!editProductInfo.cover) {
        if (index === 0) {
          setEditProductInfo((prev) => ({
            ...prev,
            cover: imageURL
          }))
        } else {
          setUploadImages((prev) => [...prev, { file, url: imageURL }])
        }
      } else {
        setUploadImages((prev) => [...prev, { file, url: imageURL }])
      }
      formDataRef.current.append('image', file)
    })
    setImageFormData(formDataRef.current)
  }

  const handleDeleteUpload = (url) => {
    const updatedImg = editImages.filter((item) => item.image_path !== url)
    const updatedUpload = uploadImages.filter((item) => item.url !== url)
    setEditImages(updatedImg)
    setUploadImages(updatedUpload)
  }

  const handleUpdateClick = async () => {
     const {
       name,
       description,
       category,
       sku,
       quantity,
       priceRegular,
       priceSale
     } = editProductInfo

     const SelectedItem = BaseAdminMenu.find((item) =>
       item.link.includes(params)
     )

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

     if (totalImageQty < 4) {
       Swal.fire({
         position: 'top',
         icon: 'warning',
         title: 'Please Upload 4 Images',
         showConfirmButton: false,
         timer: 1500
       })
       return
     }
     
     if (!editImages.length && uploadImages.length > 0) {
      //  顯示上傳中的提示框
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
          const editProductInfoTemp = {
            ...editProductInfo,
            cover: image[0].link
          }
          const { status: addStatus, message } = await AdminModifyProduct(adminProduct.id, {
            productInfo: editProductInfoTemp,
            productImage: realImageUrlTemp
          })

          if (addStatus === 'success') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: `Successfully Updated ${editProductInfo.name}`,
              showConfirmButton: false,
              timer: 1500
            })
            const { products } = await AdminGetProducts({
              id: SelectedItem ? SelectedItem.id : '',
              page: activePage
            })
            setAdminProducts(products)
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
     } else if (editImages.length > 0 && uploadImages.length > 0) {
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
           const realImageUrlTemp = editImages
             .map((image) => ({
               id: String(image.id),
               name: image.name,
               link: image.image_path
             }))
             .concat(image)

           const { status: addStatus, message } = await AdminModifyProduct(adminProduct.id, {
             productInfo: editProductInfo,
             productImage: realImageUrlTemp
           })

           if (addStatus === 'success') {
             Swal.fire({
               position: 'top',
               icon: 'success',
               title: `Successfully Updated ${editProductInfo.name}`,
               showConfirmButton: false,
               timer: 1500
             })
             const { products } = await AdminGetProducts({
               id: SelectedItem ? SelectedItem.id : '',
               page: activePage
             })
             setAdminProducts(products)
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
     } else if (editImages.length > 0 && !uploadImages.length) {
      try {
          const realImageUrlTemp = editImages
          .map((image) => ({
            id: String(image.id),
            name: image.name,
            link: image.image_path
          }))

          const { status, message } = await AdminModifyProduct(
            adminProduct.id,
            {
              productInfo: editProductInfo,
              productImage: realImageUrlTemp
            }
          )

          if (status === 'success') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: `Successfully Updated ${editProductInfo.name}`,
              showConfirmButton: false,
              timer: 1500
            })
            const { products } = await AdminGetProducts({
              id: SelectedItem ? SelectedItem.id : '',
              page: activePage
            })
            setAdminProducts(products)
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
        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed!',
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
          <p>Home ＞ {ProductPageTitle(params)} ＞ Product Details</p>
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
                defaultValue={editProductInfo.name}
                onChange={(e) => handleEditProductInputChange(e)}
              />
            </div>
            <div className={styles.description}>
              <label>Description</label>
              <textarea
                placeholder="Type Description here"
                name={'description'}
                defaultValue={editProductInfo.description}
                onChange={(e) => handleEditProductInputChange(e)}
              ></textarea>
            </div>
            <div className={styles.category}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                defaultValue={editProductInfo.category}
                onChange={(e) => handleEditProductInputChange(e)}
              >
                <option value="" disabled>
                  Choose Category Here
                </option>
                {BaseAdminMenu.map((item) => (
                  <option value={item.title} key={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.sku}>
              <label>SKU</label>
              <TextInput
                type={'number'}
                placeholder={3983}
                name={'sku'}
                defaultValue={editProductInfo.sku}
                onChange={(e) => handleEditProductInputChange(e)}
              />
            </div>
            <div className={styles.stock}>
              <label>Stock Quantity</label>
              <TextInput
                type={'number'}
                placeholder={1234}
                name={'quantity'}
                defaultValue={editProductInfo.quantity}
                onChange={(e) => handleEditProductInputChange(e)}
              />
            </div>
            <div className={styles.price}>
              <label>Regular Price</label>
              <TextInput
                type={'number'}
                placeholder={'$1000'}
                name={'priceRegular'}
                defaultValue={editProductInfo.priceRegular}
                onChange={(e) => handleEditProductInputChange(e)}
              />
            </div>
            <div className={styles.sale}>
              <label>Sale Price</label>
              <TextInput
                type={'number'}
                placeholder={'$450'}
                name={'priceSale'}
                defaultValue={editProductInfo.priceSale}
                onChange={(e) => handleEditProductInputChange(e)}
              />
            </div>
          </form>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img src={editProductInfo.cover} alt="" />
              <div
                className={styles.deleteCover}
                onClick={() => {
                  if (!editImages.length && !uploadImages.length) {
                    setEditProductInfo((prev) => ({
                      ...prev,
                      cover: ''
                    }))
                  } else if (!editImages.length && uploadImages.length > 0) {
                    setEditProductInfo((prev) => ({
                      ...prev,
                      cover: uploadImages[0].url
                    }))
                    setUploadImages(uploadImages.slice(1))
                  } else if (editImages.length > 0) {
                    setEditProductInfo((prev) => ({
                      ...prev,
                      cover: editImages[0].image_path
                    }))
                    setEditImages(editImages.slice(1))
                  }
                }}
              >
                <Cross />
              </div>
            </div>
            <div className={styles.upload}>
              <h6>Product Gallery</h6>
              <div
                className={styles.dropZone}
                onClick={() => handleUploadImage()}
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
              </div>
              <div className={styles.cards}>
                {editImages &&
                  editImages.length > 0 &&
                  editImages.map((image) => (
                    <UploadedCard
                      image={image}
                      key={image.id}
                      handleDeleteUpload={(url) => handleDeleteUpload(url)}
                    />
                  ))}
                {uploadImages &&
                  uploadImages.length > 0 &&
                  uploadImages.map((image) => (
                    <UploadedCard
                      image={image}
                      key={image.url}
                      handleDeleteUpload={(url) => handleDeleteUpload(url)}
                    />
                  ))}
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <div className={styles.update}>
                <Button text={'UPDATE'} onClick={() => handleUpdateClick()} />
              </div>
              <div className={styles.delete}>
                <Button
                  text={'DELETE'}
                  onClick={() => handleProductDelete(adminProduct.id)}
                />
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

export default AdminProductDetail
