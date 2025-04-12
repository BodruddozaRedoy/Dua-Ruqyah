'use client'
import React, { useEffect } from 'react'
import DuaCard from './DuaCard'
import { useDuas } from '@/hooks/useDuas'
import { useSubCategory } from '@/hooks/useSubCategory'
import { useDuaStore } from '@/store/duaStore'
import { useQuery } from '@tanstack/react-query'
import { axiosPublic } from '@/lib/axiosPublic'

const DuaSection = () => {
  const { duas, isLoading, refetch } = useDuas()
  const { subcategories, isLoading:subLoading, isError } = useSubCategory()
  const { subCatId, subCatName, setSubCatId, setSubCatName, subCategories } = useDuaStore()
  // console.log("subs", subCategories)
  // 🔁 Set default subcategory + refetch duas
  // useEffect(() => {
  //   if (subcategories.length > 0 && !subCatId) {
  //     const first = subcategories[0]
  //     setSubCatId(first.subcat_id)
  //     setSubCatName(first.subcat_name_en)
  //     refetch() // 👉 manually trigger fetch after setting
  //   }
  // }, [subcategories, subCatId, setSubCatId, setSubCatName, refetch])

  const { data: firstSubcategory = [] } = useQuery({
    queryKey: ['subcategories'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/subcategories/${1}`)
      console.log("subcategories", res.data.subcategories)
      return res.data.subcategories
    },
    // enabled: !!categoryId,
  })

  const {data: firstDua = []} = useQuery({
    queryKey: ["firstDua"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/dua/1`);
      return res.data.dua;
    },
    // enabled: !!subCatId, // wait for subCatId
  });

  console.log("duas at dua section", duas)

  return (
    <div>
      {/* Search */}
      <div className='w-full flex items-center justify-between'>
        <div></div>
        <div className='relative w-[371px]  mb-[27px]'>
          <input className='h-[52px] bg-white rounded-[10px] p-[16px] w-full' placeholder='Search by Dua Name' />
          <div className='absolute right-1 top-1/2 -translate-y-1/2 w-[54px] h-[44px] flex items-center justify-center rounded-[6px] bg-[#F3F4F6] p-[15px] cursor-pointer select-none'>
            <img src='./search.png' alt='search' />
          </div>
        </div>
      </div>

      <div className='space-y-[10px]'>
        {/* Section title */}
        <div className='h-[52px] w-full py-[15px] px-[30px] bg-white rounded-[10px] border border-[#E2E2E2]'>
          <p className='text-[#1FA45B] font-semibold text-[16px]'>
            Section:{' '}
            <span className='text-black text-[16px] font-medium'>
              {subCatName ? subCatName : firstSubcategory[0]?.subcat_name_en}
            </span>
          </p>
        </div>

        {/* Dua cards */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          (duas.length <= 0 ? firstDua : duas)?.map((dua: any, index: number) => (
            <DuaCard key={index} dua={dua} />
          ))
        )}
      </div>
    </div>
  )
}

export default DuaSection
