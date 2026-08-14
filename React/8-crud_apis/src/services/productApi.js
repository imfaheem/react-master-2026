import { api } from "../api/axios";

export const getProduct = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}

export const getProducts = async () => {
    const response = await api.get("/products");
    return response.data.products;
};

export const postProduct = async (productData) => {
    const response = await api.post('/products/add', productData);
    return response.data;
}

export const updateProduct = async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
}

export const patchProduct = async (id, productData) => {
    const response = await api.patch(`/products/${id}`, productData);
    return response.data;
}

export const deleteProduct = async (productId) => {
    const response = await api.delete(`/products/${productId}`);
    return response.data;
}
