import { axiosInstance } from "./instance";

/**
 * Get texts
 *
 */
const getTexts = async () => {
    return await axiosInstance.get("/texts");
};

/**
 * Add text
 * @param {string} text
 */
const addText = async (text: string) => {
    return await axiosInstance.post("/texts", { text });
};

export { getTexts, addText };
