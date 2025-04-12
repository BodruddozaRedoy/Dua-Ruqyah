import { axiosPublic } from "@/lib/axiosPublic"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCategory = () => {
    const {data:categories=[]} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
          const res = await axiosPublic.get("/api/categories")
          console.log("category",res.data.categories)
          return res.data.categories
        }
      })
      return {categories}
}