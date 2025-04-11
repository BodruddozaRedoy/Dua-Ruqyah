import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useDuas = () => {
    
    const {data:duas=[], isLoading}= useQuery({
        queryKey: ['duas'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/dua/${1}`)
            console.log("duas",res.data.dua)
            return res.data.dua
        }
    })

    return {duas, isLoading}
}