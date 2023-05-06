import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4000",
});

export const signinWithGoogle = async (payload) => {    
    const result = await api({
        method: 'post',
        url: '/signin/google',
        data: payload
    }).catch((err) => {
        throw new Error(err.response.data.message);
    });
    return result.data;
}

export const addQuestion = async (payload) => {
    const result = await api({
        method: 'post',
        url: '/question/addQuestion',
        data: payload
    }).catch((err) => {
        throw new Error(err.response.data.message);
    });
    return result.data;
}