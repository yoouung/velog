import axios from "axios";
import urls from '../urls';

export const getPosts = async () => {
    const response = axios.get(`${urls.common}/post`)
    return response
}

export const createPosts = async () => {
    const response = axios.get(`${urls.common}/post`, form)
    return response
}
