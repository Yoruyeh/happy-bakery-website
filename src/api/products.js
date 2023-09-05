import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/products'

export const GetProducts = async ({ id, page, sort, keyword }) => {
  try {
    let url = baseUrl
    const queryParams = []

    if (id) {
      queryParams.push(`category=${id}`)
    }

    if (keyword) {
      console.log(keyword)
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

    const { data } = await axios.get(url)

    return data
    
  } catch (error) {
    console.error('[Get Products Failed]: ', error)
    return error.response.data
  }
}

export const GetProductById = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${id}`)

    return data

  } catch (error) {
    console.error('[Get Product Detail Failed]: ', error)
    return error.response.data
  }
}

export const GetRecommendProducts = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/popular?top=16`)

    return data
  } catch (error) {
    console.error('[Get Recommend Products Failed]: ', error)
    return error.response.data
  }
}

export const GetSearchedProducts = async (keyword) => {
  try {
    const { data } = await axios.get(`${baseUrl}?keyword=${keyword}`)

    return data
  } catch (error) {
    console.error('[Get Searched Products Failed]: ', error)
    return error.response.data
  }
}
