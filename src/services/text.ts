import { AxiosResponse } from "axios";
import { axiosInstance } from "./instance";

/**
 * Get texts
 * @returns {Promise<AxiosResponse<any>>}
 *
 */
const getTexts = async (): Promise<AxiosResponse<any>> => {
    return await axiosInstance.get("/texts");
};

/**
 * Add text
 * @param {string} text
 * @returns {Promise<AxiosResponse<any>>}
 *
 */
const addText = async (text: string): Promise<AxiosResponse<any>> => {
    return await axiosInstance.post("/texts", { text });
};

/**
 * Delete text
 * @param {string} id
 * @returns {Promise<AxiosResponse<any>>}
 *
 */
const deleteText = async (id: string): Promise<AxiosResponse<any>> => {
    return await axiosInstance.delete(`/texts/${id}`);
};

export { getTexts, addText, deleteText };
