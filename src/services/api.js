import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-50g1.onrender.com',
})

export default api
