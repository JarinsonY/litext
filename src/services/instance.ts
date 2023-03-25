// Axios
import axios from "axios";
import { BASE_URL_API } from "../utils/constants";

export const axiosInstance = axios.create({
    baseURL: BASE_URL_API,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
