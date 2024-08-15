import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../config";

const API_BASE_URL = BASE_URL;


const useAxioxWithInterceptor = (): AxiosInstance => {
    const jwtAxios = axios.create({ baseURL: API_BASE_URL });
    const navigate = useNavigate();

    jwtAxios.interceptors.response.use(
        (response) => {
            return response;
        },

        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 401 || 403) {    // UnAuthorized
                const refreshToken = localStorage.getItem("refresh_token");
                if (refreshToken) {
                    try {
                        const refreshResponse = await axios.post(
                            "http://127.0.0.1:8000/api/token/refresh/",
                            {
                                refresh: refreshToken
                            }
                        )
                        const newAccessToken = refreshResponse.data.access
                        localStorage.setItem('access_token', newAccessToken);
                        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return jwtAxios(originalRequest)
                    } catch (error) {
                        navigate("/login");
                        throw error
                    }
                }
                else {
                    navigate("/login")
                }

            }
            else {
                throw error
            }
        }
    )
    return jwtAxios
}

export default useAxioxWithInterceptor;
