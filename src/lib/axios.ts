import axios from "axios"
import allUrl from "../config/allUrl.json"

const axiosInstance = axios.create({
  baseURL: allUrl.apiUrl,
  headers: {
    "content-language": "en",
    Accept: "application/json",
    platform: "web",
    "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
  },
})

export default axiosInstance
