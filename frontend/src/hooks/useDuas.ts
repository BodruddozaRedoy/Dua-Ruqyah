import { axiosPublic } from "@/lib/axiosPublic";
import { useDuaStore } from "@/store/duaStore";
import { useQuery } from "@tanstack/react-query";

export const useDuas = () => {
  const { subCatId } = useDuaStore();

  const {
    data: duas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["duas", subCatId],
    queryFn: async () => {
      if (!subCatId) return [];
      const res = await axiosPublic.get(`/api/dua/${subCatId}`);
      return res.data.dua;
    },
    enabled: !!subCatId, // wait for subCatId
  });

  return { duas, isLoading, refetch };
};
