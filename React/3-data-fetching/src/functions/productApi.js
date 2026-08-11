import { api } from "../api/axios"

export const getProducts = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch(err) {
        console.log(err)
    }
}
