import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL);
const BASE_URL = import.meta.env.VITE_BASE_URL;

const intialState = {
    user: null,
    token: null,
    isAdmin: false,
    Permissions: [],
};

const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    intialState;

export const PublicAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const PrivateAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${user?.token}`,
    },
});
