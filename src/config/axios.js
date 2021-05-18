import axios from 'axios'
import { IAM_SERVICE_URL } from '../config/env'

const instance = axios.create({
  baseURL: IAM_SERVICE_URL
})

export default instance