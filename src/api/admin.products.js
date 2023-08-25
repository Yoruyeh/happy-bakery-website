import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin/product'

export const AdminUploadFile = async (formData) => {
  try {
    const { data } = await AdminAxiosInstance.post(
      `${baseUrl}/image`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    return data

  } catch (error) {
    console.error('[Admin Upload File failed]: ', error)
    return error.response.data
  }
}

export const AdminAddNewProduct = async ({ productInfo, productImage }) => {
  try {
    const { data } = await AdminAxiosInstance.post(baseUrl, {
      productInfo,
      productImage
    })

    return data
  } catch (error) {
    console.error('[Admin Add New Product failed]: ', error)
    return error.response.data
  }
}