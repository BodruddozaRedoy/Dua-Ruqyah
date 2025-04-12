import { axiosPublic } from "@/lib/axiosPublic"
import { useDuaStore } from "@/store/duaStore"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useSubCategory = (categoryId?: string, open?: boolean) => {
    const { setSubCatName, subCatId } = useDuaStore()
  const { data: subcategories = [], isLoading, isError } = useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/subcategories/${categoryId}`)
      console.log("subcategories", res.data.subcategories)
      return res.data.subcategories
    },
    enabled: !!categoryId,
  })

  return { subcategories, isLoading, isError }
}
