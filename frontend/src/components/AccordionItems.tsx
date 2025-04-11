'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { AnimatePresence, motion } from 'framer-motion'
import { useSubCategory } from '@/hooks/useSubCategory'
import { useDuas } from '@/hooks/useDuas'
import { useDuaStore } from '@/store/duaStore'

const AccordionItems = ({ category }: any) => {
  const [open, setOpen] = useState(false)
  const { subcategories, isLoading, isError } = useSubCategory(category.cat_id, open)
  // const [subCat, setSubCat] = useState()
  const { duas, setSubCat, refetch, setSubName } = useDuas()
  const { setSubCatName, setSubCatId } = useDuaStore()


  const handleSub = (id: any, subName: any) => {
    // refetch()
    setSubCatId(id)
    setSubCat(id)
    setSubCatName(subName)
  }
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`${open ? 'bg-[#E8F0F5]' : 'bg-none'
          } p-[10px] flex justify-between items-center rounded-[10px] transition-all cursor-pointer select-none`}
      >
        <div className='flex items-center'>
          <div className='bg-[#CFE0E5] rounded-[10px] w-[60px] h-[60px] flex items-center justify-center'>
            <img src='./005-fever.png' alt='' />
          </div>
          <div className='ml-[16px]'>
            <h2 className='font-semibold text-[16px] text-[#1FA45B]'>{category.cat_name_en}</h2>
            <p className='text-[14px] text-[#7E7E7E]'>Subcategory:{category.no_of_subcat}</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-semibold text-[16px]'>{category.no_of_dua}</p>
          <p className='text-[14px] text-[#7E7E7E]'>Duas</p>
        </div>
      </div>

      {/* Animated Subcategory */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key='content'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, }}
            className='overflow-hidden cursor-pointer select-none'
          >
            {subcategories.map((sub: any, index: number) => (
              <div onClick={() => handleSub(sub.subcat_id, sub.subcat_name_en)} key={sub._id || index} className='border-dashed border-l border-[#1FA45B] ml-5'>
                <div className='flex items-center relative py-4'>
                  <GoDotFill className='absolute -left-2 text-[#1FA45B]' />
                  <p className='pl-5 text-[16px] font-semibold'>{sub.subcat_name_en}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItems
