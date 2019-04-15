import axios from 'axios'

// config baseURL for request
const api = axios.create({
    baseURL: "https://api.github.com/",
    timeout: 5000
})

export default api;
