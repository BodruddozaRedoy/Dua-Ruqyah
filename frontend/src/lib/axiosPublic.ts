import  axios  from 'axios';
export const axiosPublic = axios.create({
    baseURL: "https://dua-server-flame.vercel.app"
})