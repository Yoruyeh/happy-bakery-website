import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin/product'

export const AdminGetProducts = async ({ id, page, sort, keyword }) => {
  try {
    let url = baseUrl + 's'
    const queryParams = []

    if (id) {
      queryParams.push(`category=${id}`)
    }

    if (keyword) {
      queryParams.push(`keyword=${keyword}`)
    }

    if (sort) {
      queryParams.push(`sort=${sort}`)
    } else {
      queryParams.push('sort=price_asc')
    }

    if (page) {
      queryParams.push(`page=${page}`)
    } else {
      queryParams.push('page=1')
    }

    if (queryParams.length) {
      url += `?${queryParams.join('&')}`
    }

    const { data } = await AdminAxiosInstance.get(url)

    return data
  } catch (error) {
    console.error('[Admin Get All Products failed]: ', error)
    return error.response.data
  }
}

export const AdminGetProductById = async (id) => {
  try {
    const { data } = await AdminAxiosInstance.get(`${baseUrl}/${id}`)

    return data

  } catch (error) {
    console.error('[Admin Get Product failed]: ', error)
    return error.response.data
  }
}

export const AdminGetSearchedProducts = async (keyword) => {
  try {
    const url = baseUrl + 's'
    const { data } = await AdminAxiosInstance.get(`${url}?keyword=${keyword}`)

    return data
  } catch (error) {
    console.error('[Admin Get Searched Products Failed]: ', error)
    return error.response.data
  }
}

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

export const AdminModifyProduct = async (id, { productInfo, productImage }) => {
  try {
    const { data } = await AdminAxiosInstance.put(`${baseUrl}/${id}`, {
      productInfo,
      productImage
    })

    return data
  } catch (error) {
    console.error('[Admin Modify Product failed]: ', error)
    return error.response.data
  }
}

export const AdminDeleteProduct = async (id) => {
  try {
    const { data } = await AdminAxiosInstance.delete(`${baseUrl}/${id}`)

    return data
  } catch (error) {
    console.error('[Admin Delete Product failed]: ', error)
    return error.response.data
  }
}