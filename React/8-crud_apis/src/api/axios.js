import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if(accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    }
)

// Response Interceptor
api.interceptors.response.use(
    response => response,
    async (error) => {
        if(error.response?.status === 401) {
            const originalRequest = error.config;

            if (originalRequest._retry) {
                return Promise.reject(error);
            }
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                // Refresh Token Request
                const response = await api.post("/auth/refresh", {
                    refreshToken,
                });

                //New Interceptor Responses
                const newAccessToken = response.data.accessToken;
                const newRefreshToken = response.data.refreshToken;

                // Storing New Tokens
                localStorage.setItem("accessToken", newAccessToken);
                localStorage.setItem("refreshToken", newRefreshToken);

                // Retry original request
                originalRequest.headers = {
                    ...originalRequest.headers,
                    Authorization: `Bearer ${newAccessToken}`,
                };
                return api(originalRequest);
            } catch(refreshError) {
                console.log("Refresh Token failed:", refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
)
