import axios from "axios";

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
        "Content-Type": "application/json",
        "Authroization": `Bearer ${import.meta.env.VITE_API_KEY}`
    },
})

