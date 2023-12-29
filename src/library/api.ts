import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const token = import.meta.env.VITE_TOKEN
const language = import.meta.env.VITE_LANGUAGE

const api = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
    params: {
        api_key: "ea9879b2a79093a6ce0ac0ed556d0c61",
        language,
    },
})

export { api }