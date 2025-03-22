import axios from "axios"
import allUrl from "../config/allUrl.json"

const axiosInstance = axios.create({
  baseURL: allUrl.apiUrl,
  headers: {},
})

export default axiosInstance
