import styles from './imageDropZone.module.scss'
import { Image } from "../../assets/icons"
import { useState } from 'react'
import Swal from 'sweetalert2'

const ImageDropZone = ({
  dropImageRef,
  handleUploadImage,
  handleImageChange,
  uploadImages,
  setUploadImages,
  formDataRef,
  setImageFormData,
  totalImageQty,
  editProductInfo,
  setEditProductInfo
}) => {
  const [dragging, setDragging] = useState(false)

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setDragging(false)

    const files = Array.from(e.dataTransfer.files)
    const totalUplaodQty = files.length + totalImageQty

    if (totalUplaodQty > 4) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Maximum upload is 4',
        showConfirmButton: false,
        timer: 1500
      })
      const imagesToRemove = totalUplaodQty - 4
      files.splice(4 - uploadImages.length, imagesToRemove)
    }

    if (editProductInfo) {
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
    } else {
      files.forEach((file) => {
        const imageURL = URL.createObjectURL(file)
        setUploadImages((prev) => [...prev, { file, url: imageURL }])
        formDataRef.current.append('image', file)
      })
    }
      
    setImageFormData(formDataRef.current)
  }

  return (
    <div
      className={styles.dropZone}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => handleUploadImage()}
      style={{
        backgroundColor: dragging ? 'lightgray' : ''
      }}
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
  )
}

export default ImageDropZone