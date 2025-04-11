import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCategory = () => {
    const {data:categories=[]} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
          const res = await axios.get("http://localhost:5000/api/categories")
          console.log("category",res.data.categories)
          return res.data.categories
        }
      })
      return {categories}
}