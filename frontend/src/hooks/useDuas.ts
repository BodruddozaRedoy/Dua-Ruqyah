import { useDuaStore } from "@/store/duaStore"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

export const useDuas = () => {
    const [subCat, setSubCat] = useState(1)
    const [subName, setSubName] = useState("")
      const { subCatName, subCatId } = useDuaStore()
    
    // console.log("subcat", subCat)
    // console.log("subname", subName)
    const {data:duas=[], isLoading, refetch}= useQuery({
        queryKey: ['duas'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/dua/${subCatId}`)
            console.log("duas",res.data.dua)
            return res.data.dua
        },
        enabled: !!subCatId
        
    })

    return {duas, setSubCat, isLoading, refetch, setSubName, subName}
}