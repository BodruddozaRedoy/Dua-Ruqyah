import { useDuaStore } from "@/store/duaStore"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useSubCategory = (categoryId?: string, open?: boolean) => {
    const { setSubCatName, subCatId } = useDuaStore()
  const { data: subcategories = [], isLoading, isError } = useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/api/subcategories/${subCatId ? subCatId : 1}`)
      console.log("subcategory", res.data.subcategories)
      return res.data.subcategories
    },
    enabled: open,
  })

  return { subcategories, isLoading, isError }
}
