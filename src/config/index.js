import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://excommerceapp.herokuapp.com'
})

export default instance