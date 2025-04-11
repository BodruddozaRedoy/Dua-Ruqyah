import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useSubCategory = (categoryId?: string, open?: boolean) => {
  const { data: subcategories = [], isLoading, isError } = useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/api/subcategories/${categoryId || 1}`)
      console.log("subcategory", res.data.subcategories)
      return res.data.subcategories
    },
    enabled: open,
  })

  return { subcategories, isLoading, isError }
}
