import axios from "axios"

export const getProducts = async () => {
    return await axios.get("http://localhost:5000/api/v1/maybach")
}

export const getSingleProduct = async (id) => {
    return await axios.get(`http://localhost:5000/api/v1/maybach/${id}`)
}